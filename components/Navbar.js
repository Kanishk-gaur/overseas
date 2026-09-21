"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import {
  mainNav,
  companyMegaMenu,
  jobSeekerNav,
  site,
} from "@/lib/siteConfig";
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
            <Icon name="phone" className="h-3.5 w-3.5" /> {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Icon name="message-circle" className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
            <Icon name="mail" className="h-3.5 w-3.5" /> {site.email}
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
                  {item.mega && <Icon name="chevron-down" className="ml-1 inline h-3.5 w-3.5" />}
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

                {item.mega === "industries" && openMega === "industries" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-96">
                    <div className="grid grid-cols-2 gap-2 bg-white rounded-xl shadow-2xl p-4 text-navy">
                      {industries.map((ind) => (
                        <Link
                          key={ind.name}
                          href={`/industries/${ind.slug}`}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-muted"
                        >
                          <Icon name={ind.icon} className="h-4 w-4 text-gold" /> {ind.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-2">
            <Link href={jobSeekerNav.href} className="btn-secondary text-sm px-5 py-2">
              {jobSeekerNav.name}
            </Link>
            <Link href="/request-workforce" className="btn-primary text-sm px-5 py-2">
              Request Workforce
            </Link>
          </div>

          <button
            className="xl:hidden text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? "x" : "menu"} className="h-6 w-6" />
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
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href={jobSeekerNav.href}
                className="btn-secondary text-sm px-5 py-2 w-full"
                onClick={() => setMobileOpen(false)}
              >
                {jobSeekerNav.name}
              </Link>
              <Link
                href="/request-workforce"
                className="btn-primary text-sm px-5 py-2 w-full"
                onClick={() => setMobileOpen(false)}
              >
                Request Workforce
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
