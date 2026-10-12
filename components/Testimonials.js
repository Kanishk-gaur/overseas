"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import Icon from "./Icon";
import { testimonials } from "@/data/testimonials";
import { backgroundImages } from "@/data/siteImages";

export default function Testimonials() {
  return (
    <section className="section-y relative overflow-hidden bg-navy">
      <Image
        src={backgroundImages.testimonials}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy-dark/95" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Client Success Stories</h2>
          <p className="mt-2 text-white/60">Hear from businesses we&apos;ve supplied workforce to.</p>
        </div>

        <div className="mt-10">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1.1}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.8 },
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="h-full rounded-2xl bg-navy-dark/60 border border-white/15 p-6 backdrop-blur">
                  <Icon name="quote" className="h-6 w-6 text-gold-light/70" />
                  <p className="mt-3 text-white/80 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gold-light">{t.name}</p>
                    <p className="text-xs text-white/50">{t.detail}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
