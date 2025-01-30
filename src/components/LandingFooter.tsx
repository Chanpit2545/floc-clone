import Marquee from "react-fast-marquee";

export function LandingFooter() {
  return (
    <div className="relative pb-6">
      <img
        src="https://floc.is/images/landing/banner/background.svg"
        alt="Yellow Trapezoid"
        className="absolute bottom-0 left-0 w-full h-auto -z-20"
      />
      <Marquee className="relative z-0" autoFill pauseOnHover>
        <div className="relative group w-fit">
          <img
            src="https://floc.is/_next/image?url=https%3A%2F%2Fassets.floc.is%2Flanding%2Fportfolio%2Fchatchai.webp&w=384&q=75"
            alt="random image"
            className="rounded-xl mx-6 transition-all duration-300 group-hover:brightness-50"
          />

          <div className="absolute bottom-4 left-9 text-white text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="font-semibold">Name</div>
            <div className="font-normal">Position</div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}
