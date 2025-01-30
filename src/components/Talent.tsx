import Marquee from "react-fast-marquee";

export function Talent() {
  return (
    <div className="grid mt-64 mb-8 mx-16 grid-cols-2">
      <div className="col-span-1">
        <div className="flex font-bold text-4xl gap-4">
          Hirer meets the right{" "}
          <span className="relative text-blue-700">
            <img
              src="https://floc.is/icons/landing/hirer-find-talent/talent-underline.svg"
              alt="Talent yellow line"
              className="absolute -z-10 left-0 -bottom-6 w-full h-full"
            />
            Talents
          </span>
        </div>
        <ul className="list-image-[url(https://floc.is/_next/static/media/success.e35d86b2.svg)] list-inside pt-4">
          <li className="text-2xl font-bold">
            Real life professionals
            <ul className="pl-8 mt-2 space-y-1 list-none list-inside text-xl font-semibold text-gray-700">
              <li>Floc curates talents through invitation only</li>
            </ul>
          </li>
          <li className="text-2xl font-bold pt-2">
            Variety of skills & styles
            <ul className="pl-8 mt-2 space-y-1 list-none list-inside text-xl font-semibold text-gray-700">
              <li>From small to big sized projects, we got your back</li>
            </ul>
          </li>
          <li className="text-2xl font-bold pt-2">
            Find the right talent for you within 5 mins!
            <ul className="pl-8 mt-2 space-y-1 list-none list-inside text-xl font-semibold text-gray-700">
              <li>
                Floc selects & recommends the perfect talent for your project
              </li>
            </ul>
          </li>
        </ul>
        <div className="pt-8 mx-8 -space-y-1">
          <div className="text-xl text-orange-400 font-medium">
            There are currently 732 talents on Floc
          </div>
          <div className="text-xl text-gray-400 italic font-medium">
            who are ready to work with you
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <Marquee autoFill gradient gradientWidth={85} direction="right">
          <div className="w-[354px] h-[374px] rounded-xl shadow-lg mx-4">
            <img
              src="https://floc.is/_next/image?url=https%3A%2F%2Fcdn.floc.is%2Ftalent%2Fportfolio%2FSquare_Card_Mockup_clrtankdn000f0ps6bdoldok7clrt0tn1o00236358m8pghbfk.png&w=750&q=75"
              alt="contact lens picture"
              className="w-[354px] h-[286px] object-cover rounded-t-xl"
            />
            <div className="flex gap-3 py-2 px-3">
              <img
                src="https://floc.is/_next/image?url=https%3A%2F%2Fcdn.floc.is%2Fprofile%2F9d82cfbc-8ac2-4103-a9f4-d52ad6fe09be.png%3Fn%3D0.5307211240079044&w=32&q=75"
                alt="Icon"
                className="rounded-full"
              />
              <p className="font-medium text-lg">
                Name <span className="text-base text-gray-400">(Nickname)</span>
              </p>
            </div>
            <div className="flex justify-start gap-4 px-14">
              <button className="bg-purple-300 font-medium text-sm px-4 py-1 rounded-full">
                Tag 1
              </button>
              <button className="bg-purple-300 font-medium text-sm px-4 py-1 rounded-full">
                Tag 2
              </button>
              <button className="bg-purple-300 font-medium text-sm px-4 py-1 rounded-full">
                Tag 3
              </button>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
