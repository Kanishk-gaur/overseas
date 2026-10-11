import Image from "next/image";

export default function HeroTeamStrip() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="relative flex justify-center px-4 py-6 sm:py-8">
        <Image
          src="/images/workforce-team.png"
          alt="Team of skilled workers ready for overseas deployment"
          width={1024}
          height={434}
          loading="eager"
          className="h-auto w-full max-w-[680px] object-contain sm:max-w-[860px] lg:max-w-[1040px]"
        />
      </div>
    </div>
  );
}
