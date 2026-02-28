import { describe, it, expect } from "vitest";
import { blogPosts } from "@/data/blogPosts";

describe("blogPosts data", () => {
  it("has at least one post", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("each post has required fields", () => {
    blogPosts.forEach((post, index) => {
      expect(post.slug, `Post ${index} missing slug`).toBeTruthy();
      expect(post.title, `Post ${index} missing title`).toBeTruthy();
      expect(post.excerpt, `Post ${index} missing excerpt`).toBeTruthy();
      expect(post.content, `Post ${index} missing content`).toBeTruthy();
      expect(post.date, `Post ${index} missing date`).toBeTruthy();
    });
  });

  it("slugs are unique", () => {
    const slugs = blogPosts.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it("dates are valid ISO format", () => {
    const isoDate = /^\d{4}-\d{2}-\d{2}$/;
    blogPosts.forEach((post) => {
      expect(post.date).toMatch(isoDate);
      expect(new Date(post.date).toString()).not.toBe("Invalid Date");
    });
  });
});
