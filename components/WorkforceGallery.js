import Image from "next/image";
import { galleryImages } from "@/data/siteImages";

export default function WorkforceGallery() {
  return (
    <section className="section-y bg-muted">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Skilled Trades We Supply
          </h2>
          <p className="mt-2 text-gray-600">
            From the workshop floor to the hospital ward — a look at the kind of
            work our people are trained and verified to do.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[14rem]">
          {galleryImages.map((img) => (
            <figure
              key={img.label}
              className={`group relative overflow-hidden rounded-2xl ${img.span ?? ""}`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-semibold text-white">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
