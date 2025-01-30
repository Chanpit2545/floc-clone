import { MdArrowOutward } from "react-icons/md";

export function LandingBody() {
  return (
    <div>
      <div className="text-5xl font-bold space-y-6 pt-16 text-center justify-items-center tracking-wide">
        <div>
          Select professional{" "}
          <span className="relative text-blue-700 font-bold ">
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
      <div className="space-y-0.5 text-center pt-10 text-2xl text-blue-900">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src="https://floc.is/images/landing/banner/flocco.svg"
            alt="Blue Bird"
            className="absolute top-80 left-0 w-auto h-auto"
          />
        </div>
        <p>
          <span className="font-medium">Floc,</span> a platform of freelance
          jobs and professional talents
        </p>
        <p>
          for{" "}
          <span className="font-medium">every creative project imaginable</span>
        </p>
      </div>
      <div className="justify-items-center pt-8 pb-20">
        <button className="flex gap-4 items-center justify-between text-2xl font-semibold bg-black text-white pl-12 pr-4 py-2 rounded-full hover:bg-blue-800 active:bg-blue-900 transition-colors">
          Join us{" "}
          <span className="bg-white rounded-full text-orange-400 text-4xl">
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </div>
  );
}
