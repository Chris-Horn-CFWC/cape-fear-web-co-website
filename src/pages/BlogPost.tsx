import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  const post = blogPosts.find((p) => p.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          p.tags.some((t) => post.tags.includes(t))
      )
      .slice(0, 3);
  }, [post]);

  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
      return;
    }
    const siteUrl = "https://www.capefearweb.co";
    const postUrl = `${siteUrl}/blog/${post.slug}`;

    document.title = `${post.title} | Cape Fear Web Co.`;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", post.metaDescription);
    setMeta('meta[property="og:title"]', "content", `${post.title} | Cape Fear Web Co.`);
    setMeta('meta[property="og:description"]', "content", post.metaDescription);
    setMeta('meta[property="og:url"]', "content", postUrl);
    setMeta('link[rel="canonical"]', "href", postUrl);

    return () => {
      document.title = "Web Design Wilmington NC | Cape Fear Web Co.";
    };
  }, [post, navigate]);

  if (!post) return null;

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-display text-2xl font-semibold text-foreground mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="font-display text-xl font-semibold text-foreground mt-8 mb-3"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }
      // List blocks
      if (block.includes("\n- ")) {
        const lines = block.split("\n");
        const intro = lines[0].startsWith("- ") ? null : lines.shift();
        return (
          <div key={i} className="mb-4 border-l-2 border-primary/30 pl-4">
            {intro && (
              <p
                className="text-muted-foreground leading-7 mb-2"
                dangerouslySetInnerHTML={{
                  __html: intro.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-foreground font-medium">$1</strong>'
                  ),
                }}
              />
            )}
            <ul className="space-y-2">
              {lines
                .filter((l) => l.startsWith("- "))
                .map((l, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <span className="leading-7 flex items-center shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <span
                      className="leading-7"
                      dangerouslySetInnerHTML={{
                        __html: l.replace("- ", "").replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-foreground font-medium">$1</strong>'
                        ),
                      }}
                    />
                  </li>
                ))}
            </ul>
          </div>
        );
      }
      // Numbered lists
      if (/^\d+\.\s/.test(block)) {
        const items = block.split("\n").filter((l) => /^\d+\.\s/.test(l));
        return (
          <ol key={i} className="space-y-2 mb-4 list-none border-l-2 border-primary/30 pl-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex gap-3 text-muted-foreground"
              >
                <span className="leading-7 flex items-center shrink-0 text-primary font-semibold">
                  {j + 1}.
                </span>
                <span
                  className="leading-7"
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace(/^\d+\.\s/, "")
                      .replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-foreground font-medium">$1</strong>'
                      ),
                  }}
                />
              </li>
            ))}
          </ol>
        );
      }
      return (
        <p
          key={i}
          className="text-muted-foreground leading-7 mb-4"
          dangerouslySetInnerHTML={{
            __html: block.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-foreground font-medium">$1</strong>'
            ).replace(
              /\[([^\]]+)\]\(([^)]+)\)/g,
              '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
            ),
          }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetStarted={openContact} />

      <main className="pt-24 pb-16">
        {/* Hero gradient banner */}
        <div className="relative overflow-hidden mb-10">
          <div className="absolute inset-0 hero-gradient-bg opacity-60" />
          <div className="relative container mx-auto px-4 lg:px-8 max-w-3xl py-10">
            {/* Back */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
          </div>
          {/* Gradient divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <article className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Content */}
          <div className="prose-custom">{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-16 glass-card rounded-xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Ready to Build Your Website?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Cape Fear Web Co. builds stunning, high-performance websites
              in under 7 days — starting at just $249.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="gap-2"
              onClick={openContact}
            >
              Get Started <ArrowRight size={16} />
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 lg:px-8 mt-20">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer onGetStarted={openContact} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default BlogPost;
