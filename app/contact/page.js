import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: `Contact Us | ${site.name}`,
  description: "Get in touch with our team about sourcing workforce across the Gulf, Europe, and Asia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have a workforce requirement? Our team is here to guide you through the process, wherever you're hiring."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
      />
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-navy">Direct Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Call us:</span>{" "}
                  <a href={site.phoneHref} className="hover:text-gold">
                    {site.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="message-circle" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">WhatsApp:</span>{" "}
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    {site.whatsapp}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Email:</span>{" "}
                  <a href={`mailto:${site.email}`} className="hover:text-gold">
                    {site.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Office Address:</span> {site.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Working Hours:</span> {site.hours}
                </span>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Office location map"
                src={site.mapEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">Send us a Message</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
