export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark">
      <div className="container-x py-14 text-center md:py-20">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
