import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-x flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
          <Icon name="compass" className="h-8 w-8 text-navy" />
        </span>
        <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
          This page isn&apos;t part of our route yet
        </h1>
        <p className="mt-3 max-w-md text-gray-600">
          The page you&apos;re looking for may have moved, or the link might be
          out of date. Here are a few places to pick back up.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/workforce" className="btn-secondary !text-navy !border-border">
            View Available Workforce
          </Link>
          <Link href="/contact" className="btn-secondary !text-navy !border-border">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
