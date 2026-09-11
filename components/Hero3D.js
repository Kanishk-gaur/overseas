"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 rounded-full border-4 border-gold/30 border-t-gold animate-spin" />
    </div>
  ),
});

export default function Hero3D() {
  return (
    <div className="h-[320px] w-full sm:h-[420px] lg:h-[480px]">
      <Globe />
    </div>
  );
}
