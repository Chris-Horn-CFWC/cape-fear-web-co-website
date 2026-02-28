import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import ContactDialog from "@/components/ContactDialog";
import { Input } from "@/components/ui/input";
import { blogPosts, allTags } from "@/data/blogPosts";

const SITE_URL = "https://www.capefearweb.co";

const Blog = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const openContact = () => setContactOpen(true);

  useEffect(() => {
    document.title = "Blog & Resources | Cape Fear Web Co.";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const desc = "Tips on web design, SEO, and growing your business in Wilmington and the Cape Fear region.";
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", "Blog & Resources | Cape Fear Web Co.");
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}/blog`);
    setMeta('link[rel="canonical"]', "href", `${SITE_URL}/blog`);

    return () => {
      // Reset to homepage defaults on unmount
      document.title = "Web Design Wilmington NC | Cape Fear Web Co.";
    };
  }, []);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  const featuredPost = filtered.length > 0 ? filtered[0] : null;
  const remainingPosts = filtered.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetStarted={openContact} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Blog & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tips on web design, SEO, and growing your business in Wilmington
              and the Cape Fear region.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Search blog articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  !activeTag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setActiveTag(activeTag === tag ? null : tag)
                  }
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    activeTag === tag
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {filtered.length > 0 ? (
            <div className="space-y-8">
              {/* Featured post */}
              {featuredPost && (
                <BlogCard post={featuredPost} featured />
              )}

              {/* Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-16">
              No articles found. Try a different search or filter.
            </p>
          )}
        </div>
      </main>

      <Footer onGetStarted={openContact} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Blog;
