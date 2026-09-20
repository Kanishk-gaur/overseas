import Image from "next/image";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy-dark/90" />
        </>
      )}
      <div className="container-x relative py-14 text-center md:py-20">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
