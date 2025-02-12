import Marquee from "react-fast-marquee";

export function Job() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center mt-12 mb-8 mx-4 md:grid md:grid-cols-1 lg:grid-cols-7 xl:grid-cols-2">
        <div className="text-center md:text-left px-4 xs:py-12 md:px-16 xl:col-span-1 lg:col-span-5">
          <div className="flex font-bold text-2xl md:text-4xl gap-2 justify-center md:justify-start items-baseline">
            <span>Talent finds the right</span>
            <span className="relative text-blue-700 ml-2">
              <span className="relative z-0">Job</span>
              <img
                src="https://floc.is/icons/landing/talent-find-job/underline.svg"
                alt="Job underline"
                className="absolute z-0 left-0 bottom-0 w-full h-2"
              />
            </span>
          </div>

          <ul className="list-image-[url(https://floc.is/_next/static/media/success.e35d86b2.svg)] list-outside pl-8 pt-4 space-y-2 text-left">
            <li className="text-xl md:text-2xl font-semibold md:font-bold">
              Create outstanding work with top brands
              <ul className="mt-2 space-y-1 list-none text-lg md:text-xl font-medium text-gray-700 text-left">
                <li>
                  Meet new opportunities from agencies, brands, and production
                  houses
                </li>
              </ul>
            </li>
            <li className="text-xl md:text-2xl font-semibold md:font-bold pt-2">
              Get fair rates for the job
              <ul className="mt-2 space-y-1 list-none text-lg md:text-xl font-medium text-gray-700 text-left">
                <li>We match the rates to suit your skills</li>
              </ul>
            </li>
            <li className="text-xl md:text-2xl font-semibold md:font-bold pt-2">
              Apply for jobs you're interested in
              <ul className="mt-2 space-y-1 list-none text-lg md:text-xl font-medium text-gray-700 text-left">
                <li>
                  Don’t wait for chances. You can reach out to companies first.
                </li>
              </ul>
            </li>
          </ul>

          <div className="pt-8 mx-8 -space-y-1">
            <div className="text-lg md:text-xl text-orange-400 font-medium">
              There are currently 732 talents on Floc
            </div>
            <div className="text-lg md:text-xl text-gray-400 italic font-medium">
              who are ready to work with you
            </div>
          </div>
        </div>

        <div className="order-last md:order-first flex justify-center mt-8 md:mt-0 xl:col-span-1 lg:col-span-2 w-full">
          <Marquee autoFill gradient gradientWidth={85} direction="left">
            <div className="flex flex-col rounded-xl bg-white w-[320px] md:w-[370px] h-[220px] shadow-lg mx-4">
              <div className="flex flex-col flex-1 justify-between px-4 pt-4 pb-2">
                <div>
                  <p className="font-semibold text-lg md:text-xl">
                    Job Position
                  </p>
                  <p className="text-sm md:text-base">Salary</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">
                    Project Duration
                  </p>
                  <p>
                    <span className="bg-gray-200 text-gray-600 px-1 text-xs md:text-sm">
                      DD/MM/YYYY - DD/MM/YYYY
                    </span>
                  </p>
                </div>
              </div>

              <hr className="h-px mx-4 my-0.5 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex gap-4">
                <div className="flex gap-3 py-2 px-4 items-center">
                  <img
                    src="https://floc.is/_next/image?url=https%3A%2F%2Fcdn.floc.is%2Fprofile%2F9d82cfbc-8ac2-4103-a9f4-d52ad6fe09be.png%3Fn%3D0.5307211240079044&w=32&q=75"
                    alt="Icon"
                    className="rounded-md w-[32px] md:w-[40px] h-[32px] md:h-[40px]"
                  />
                  <div>
                    <p className="font-medium text-sm md:text-base">
                      Middleman{" "}
                      <span className="font-normal text-xs md:text-sm text-gray-400">
                        Publisher
                      </span>
                    </p>
                    <p className="font-normal text-xs md:text-sm text-gray-400">
                      Posted DD/MM/YYYY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
