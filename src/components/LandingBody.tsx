import { MdArrowOutward } from "react-icons/md";

export function LandingBody() {
  return (
    <div>
      <div className="text-3xl md:text-5xl font-bold space-y-4 md:space-y-6 pt-10 md:pt-16 text-center justify-items-center tracking-wide">
        <div>
          Select professional{" "}
          <span className="relative text-blue-700 font-bold">
            <img
              src="https://floc.is/images/landing/banner/text-bg-en.svg"
              alt="orange circle"
              className="absolute -z-10 left-0 top-1 w-full h-full"
            />
            Freelancer
          </span>
        </div>
        <p>for your project</p>
      </div>
      <div className="space-y-0.5 text-center pt-6 md:pt-10 text-xl md:text-2xl text-blue-900">
        <div className="absolute inset-0 -z-10 w-full h-full hidden md:block">
          <img
            src="https://floc.is/images/landing/banner/flocco.svg"
            alt="Blue Bird"
            className="absolute w-1/3 md:w-1/4 h-1/3 md:h-1/4 md:-left-32 md:-top-96 xl:-top-52 xl:left-0 lg:-top-80 lg:-left-16"
          />
        </div>
        <p>
          <span className="font-semibold md:font-medium">Floc,</span> a platform
          of freelance jobs and professional talents
        </p>
        <p>
          for{" "}
          <span className="font-semibold md:font-medium">
            every creative project imaginable
          </span>
        </p>
      </div>
      <div className="justify-items-center pt-6 md:pt-8 pb-16 md:pb-20">
        <button className="flex gap-3 md:gap-4 items-center justify-between text-xl md:text-2xl font-semibold bg-black text-white pl-8 md:pl-12 pr-3 md:pr-4 py-2 rounded-full hover:bg-blue-800 active:bg-blue-900 transition-colors">
          Join us{" "}
          <span className="bg-white rounded-full text-orange-400 text-3xl md:text-4xl">
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </div>
  );
}
