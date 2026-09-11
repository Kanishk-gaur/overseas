"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  mainNav,
  companyMegaMenu,
  servicesMegaMenu,
  site,
} from "@/lib/siteConfig";
import { countries, regions } from "@/data/countries";
import { industries } from "@/data/industries";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:flex bg-navy-dark text-white/80 text-sm">
        <div className="container-x flex items-center justify-end gap-6 py-1.5">
          <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white">
            <span aria-hidden>📞</span> {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white"
          >
            <span aria-hidden>💬</span> WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
            <span aria-hidden>✉️</span> {site.email}
          </a>
        </div>
      </div>

      <nav
        className={`bg-navy transition-shadow ${scrolled ? "shadow-lg" : ""}`}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="container-x flex items-center justify-between py-3">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            {site.name}
          </Link>

          <ul className="hidden xl:flex items-center gap-0.5">
            {mainNav.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.mega && setOpenMega(item.mega)}
              >
                <Link
                  href={item.href}
                  className="whitespace-nowrap px-2.5 py-2 text-sm font-medium text-white/90 hover:text-gold-light rounded-md transition-colors inline-block"
                >
                  {item.name}
                  {item.mega && <span className="ml-1 text-xs">▾</span>}
                </Link>

                {item.mega === "company" && openMega === "company" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px] max-w-[90vw]">
                    <div className="grid grid-cols-2 gap-1 bg-white rounded-xl shadow-2xl p-3 text-navy">
                      {companyMegaMenu.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 hover:bg-muted"
                        >
                          <span className="text-sm font-semibold">{c.name}</span>
                          <span className="block text-xs text-gray-500">{c.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.mega === "services" && openMega === "services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[90vw]">
                    <div className="grid grid-cols-4 gap-6 bg-white rounded-xl shadow-2xl p-6 text-navy">
                      {servicesMegaMenu.map((group) => (
                        <div key={group.heading}>
                          <Link
                            href={group.href}
                            className="font-semibold text-sm text-navy hover:text-gold"
                          >
                            {group.heading}
                          </Link>
                          <ul className="mt-2 space-y-1.5">
                            {group.items.map((sub) => (
                              <li key={sub} className="text-sm text-gray-600">
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.mega === "countries" && openMega === "countries" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[420px] max-w-[90vw]">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 bg-white rounded-xl shadow-2xl p-4 text-navy">
                      {regions.map((region) => (
                        <div key={region}>
                          <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                            {region}
                          </p>
                          {countries
                            .filter((c) => c.region === region)
                            .map((c) => (
                              <Link
                                key={c.slug}
                                href={`/countries/${c.slug}`}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm hover:bg-muted"
                              >
                                <span>{c.flag}</span> {c.name}
                              </Link>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.mega === "industries" && openMega === "industries" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-96">
                    <div className="grid grid-cols-2 gap-2 bg-white rounded-xl shadow-2xl p-4 text-navy">
                      {industries.map((ind) => (
                        <Link
                          key={ind.name}
                          href="/industries"
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-muted"
                        >
                          <span>{ind.icon}</span> {ind.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Link href="/request-workforce" className="btn-primary text-sm px-5 py-2">
              Request Workforce
            </Link>
          </div>

          <button
            className="xl:hidden text-white text-2xl"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden bg-navy-dark text-white px-4 pb-4 max-h-[75vh] overflow-y-auto">
            {mainNav.map((item) => (
              <div key={item.name} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.mega === "company" && (
                  <div className="pb-2 pl-3">
                    {companyMegaMenu.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block py-1.5 text-xs text-white/60"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/request-workforce"
              className="btn-primary text-sm px-5 py-2 mt-4 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Request Workforce
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
