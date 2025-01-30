import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export function Community() {
  return (
    <div className="bg-gray-100 pt-16 pb-24 px-12 space-y-12">
      <div className="flex justify-center gap-32">
        <div>
          <img
            src="https://floc.is/_next/image?url=https%3A%2F%2Fassets.floc.is%2Flanding%2Fcommunity%2Fdicut.jpeg&w=1200&q=75"
            alt="community picture"
            className="w-[596px] h-[450px"
          />
        </div>
        <div className="justify-items-center text-center space-y-6">
          <img
            src="https://floc.is/_next/image?url=https%3A%2F%2Fassets.floc.is%2Flanding%2Fcommunity%2Fcommunity-en.png&w=640&q=75"
            alt="floc community"
            className="w-[256px] h-[218px]"
          />
          <div className="text-gray-400 text-xl font-medium">
            <p>Thrive collectively, not individually.</p>
            <p>Come fly with the flock and</p>
            <p>create new possibilities together.</p>
          </div>
          <div className="flex justify-center items-center gap-4 text-xl">
            <div className="text-blue-600 bg-white p-[10px] border border-gray-300 rounded-full shadow-md hover:bg-gray-100 hover:border-blue-700 active:bg-[#dbd5ff]">
              <FaFacebook />
            </div>
            <div className="bg-white p-[10px] border border-gray-300 rounded-full shadow-md hover:bg-gray-100 hover:border-blue-700 active:bg-[#dbd5ff]">
              <BsInstagram />
            </div>
            <div className="bg-white p-[10px] border border-gray-300 rounded-full shadow-md hover:bg-gray-100 hover:border-blue-700 active:bg-[#dbd5ff]">
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Marquee autoFill pauseOnHover direction="left">
          <div className="flex flex-col rounded-xl bg-white w-[400px] h-[172px] shadow-lg mx-4">
            <div className="flex gap-4 ">
              <div className="flex gap-3 py-4 px-6 items-center">
                <img
                  src="https://floc.is/_next/image?url=https%3A%2F%2Fcdn.floc.is%2Fprofile%2F9d82cfbc-8ac2-4103-a9f4-d52ad6fe09be.png%3Fn%3D0.5307211240079044&w=32&q=75"
                  alt="Icon"
                  className="rounded-full outline outline-yellow-200 w-[40px] h-[40px]"
                />
                <div>
                  <p className="font-medium text-blue-800">Name </p>
                  <p className="font-normal text-sm text-gray-400 italic">
                    Position
                  </p>
                </div>
              </div>
            </div>
            <p className="px-6">
              Thank you, Floc, for bringing professionals together. It used to
              be really hard to find the right freelancer for each project.
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
