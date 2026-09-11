import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
    >
      <div className="flex h-36 items-center justify-center bg-navy/5 text-3xl">📰</div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-medium text-gold">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h3 className="mt-2 font-semibold text-navy group-hover:text-gold">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        <span className="mt-3 text-sm font-semibold text-gold">Read more →</span>
      </div>
    </Link>
  );
}
