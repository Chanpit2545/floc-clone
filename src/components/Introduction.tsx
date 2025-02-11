import Marquee from "react-fast-marquee";

export function Introduction() {
  return (
    <div className="relative">
      <img
        src="https://floc.is/images/landing/company/background.svg"
        alt="Blue trapezoid"
        className="absolute -z-10"
      />
      <div className="bg-white mx-4 md:mx-16 my-8 space-y-5 pt-8 shadow-lg rounded-[30px] md:rounded-[60px] justify-items-center">
        <div className="flex gap-2 md:gap-4 items-center font-bold text-2xl md:text-4xl">
          Welcome friends of{" "}
          <span>
            <img
              src="https://assets.floc.is/general/floc-full-logo-no-tm.svg"
              alt="floc"
              className="w-[80px] h-[24px] md:w-[108px] md:h-[32px]"
            />
          </span>
        </div>
        <div className="text-gray-400 font-medium md:font-semibold text-lg md:text-2xl">
          Partners who seek talents from Floc
        </div>
        <Marquee className="relative z-0 pb-4 md:pb-6" autoFill pauseOnHover>
          <div className="relative group w-fit mx-2 md:mx-4">
            <img
              src="https://floc.is/_next/image?url=https%3A%2F%2Fassets.floc.is%2Flanding%2Fcompany%2Floopers.png&w=256&q=75"
              alt="Loopers"
              className="w-[100px] h-[100px] md:w-[156px] md:h-[156px] rounded-full transition-all object-cover shadow-sm duration-300 group-hover:brightness-75"
            />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:-bottom-5 bg-white text-gray-500 font-medium md:font-semibold text-xs md:text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Loopers
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
