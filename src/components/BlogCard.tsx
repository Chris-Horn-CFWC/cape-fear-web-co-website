import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group glass-card rounded-xl overflow-hidden flex flex-col sm:flex-row"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-xl" />
        <div className="p-8 flex flex-col flex-1 relative">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
            {post.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-base">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Read more
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group glass-card rounded-xl overflow-hidden flex flex-col relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-xl" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1 sm:text-[0.9375rem]">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Read more
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
