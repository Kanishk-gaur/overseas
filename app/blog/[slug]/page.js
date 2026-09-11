import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "@/data/blog";
import { countries } from "@/data/countries";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/siteConfig";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedCountries = countries.filter((c) => post.countries?.includes(c.name));

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-dark">
        <div className="container-x max-w-3xl py-14 md:py-20">
          <Link href="/blog" className="text-sm text-gold-light">
            ← Back to Blog
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-white/50">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x max-w-3xl space-y-4">
          {post.content.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}

          {relatedCountries.length > 0 && (
            <div className="!mt-10 rounded-2xl border border-border bg-muted p-5">
              <p className="text-sm font-semibold text-navy">Relevant country pages</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedCountries.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/countries/${c.slug}`}
                    className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-navy hover:border-gold"
                  >
                    {c.flag} {c.name} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
