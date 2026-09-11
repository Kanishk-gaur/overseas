import Link from "next/link";
import { site, footerNav } from "@/lib/siteConfig";
import { countries } from "@/data/countries";

const countryLinks = countries.map((c) => ({
  name: `${c.flag} ${c.name}`,
  href: `/countries/${c.slug}`,
}));

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-x py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-bold text-lg">{site.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Licensed overseas manpower supply agency helping businesses across the
            Gulf, Europe, and Asia source verified, skilled workforce.
          </p>
        </div>

        <FooterCol title="Company" links={footerNav.company} />
        <FooterCol title="Countries" links={countryLinks} />
        <FooterCol title="Legal" links={footerNav.legal} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved. | Licensed
            Overseas Manpower Supply Agency
          </p>
          <p className="text-center md:text-right max-w-xl">
            {site.name} sources and deploys workforce in compliance with applicable
            recruitment regulations. Service fees and terms are confirmed with each
            client in a formal service agreement.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm uppercase tracking-wide">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.name}>
            <Link href={l.href} className="text-sm text-white/60 hover:text-gold-light">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
