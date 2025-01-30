import Marquee from "react-fast-marquee";

export function Job() {
  return (
    <div className="bg-gray-100">
      <div className="grid mt-24 mb-8 mx-16 grid-cols-2">
        <div className="col-span-1 flex items-center justify-center">
          <Marquee autoFill gradient gradientWidth={85} direction="left">
            <div className="flex flex-col rounded-xl bg-white w-[370px] h-[220px] shadow-lg mx-4">
              <div className="flex flex-col flex-1 justify-between px-4 pt-4 pb-2">
                <div>
                  <p className="font-semibold text-xl">Job Position</p>
                  <p>Salary</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">
                    Project Duration
                  </p>
                  <p>
                    <span className="bg-gray-200 text-gray-600 px-0.5">
                      DD/MM/YYYY - DD/MM/YYYY
                    </span>
                  </p>
                </div>
              </div>

              <hr className="h-px mx-4 my-0.5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="flex gap-4 ">
                <div className="flex gap-3 py-2 px-4 items-center">
                  <img
                    src="https://floc.is/_next/image?url=https%3A%2F%2Fcdn.floc.is%2Fprofile%2F9d82cfbc-8ac2-4103-a9f4-d52ad6fe09be.png%3Fn%3D0.5307211240079044&w=32&q=75"
                    alt="Icon"
                    className="rounded-md w-[40px] h-[40px]"
                  />
                  <div>
                    <p className="font-medium">
                      Middleman{" "}
                      <span className="font-normal text-sm text-gray-400">
                        Publisher
                      </span>
                    </p>
                    <p className="font-normal text-sm text-gray-400">
                      Posted DD/MM/YYYY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="col-span-1 pl-24">
          <div className="flex font-bold text-4xl gap-4">
            Talent finds the right{" "}
            <span className="relative text-blue-700">
              <img
                src="https://floc.is/icons/landing/talent-find-job/underline.svg"
                alt="Job purple line"
                className="absolute z-0 left-0 -bottom-6 w-full h-full"
              />
              Job
            </span>
          </div>
          <ul className="list-image-[url(https://floc.is/_next/static/media/success.e35d86b2.svg)] list-inside pt-4 space-y-2">
            <li className="text-2xl font-bold">
              Create outstanding work with top brands
              <ul className="pl-8 mt-2 space-y-1 list-none list-inside text-xl font-semibold text-gray-700">
                <li>
                  Meet new opportunities from agencies, brands, and production
                  houses
                </li>
              </ul>
            </li>
            <li className="text-2xl font-bold pt-2">
              Get fair rates for the job
              <ul className="pl-8 mt-2 space-y-1 list-none list-inside text-xl font-semibold text-gray-700">
                <li>We match the rates to suit your skills</li>
              </ul>
            </li>
            <li className="text-2xl font-bold pt-2">
              Apply for jobs you're interested in
              <ul className="pl-8 mt-2 space-y-1 list-none list-inside text-xl font-semibold text-gray-700">
                <li>
                  Don’t wait for chances. You can reach out to companies first.
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
      </div>
    </div>
  );
}
