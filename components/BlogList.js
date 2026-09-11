"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { posts } from "@/data/blog";

const categories = ["All", ...new Set(posts.map((p) => p.category))];

export default function BlogList() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-navy text-white"
                  : "bg-muted text-gray-600 hover:bg-border/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
