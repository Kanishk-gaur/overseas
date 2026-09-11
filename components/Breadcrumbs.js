import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-muted">
      <div className="container-x flex flex-wrap items-center gap-1.5 py-3 text-xs text-gray-500">
        <Link href="/" className="hover:text-navy">
          Home
        </Link>
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span>/</span>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-navy">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
