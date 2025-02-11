import { BsLine, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 md:px-[70px] py-6">
        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          <div className="w-full md:w-[288px] text-center md:text-left">
            <img
              src="https://assets.floc.is/general/floc-full-logo-no-tm.svg"
              alt="floc"
              className="w-[140px] h-[144px] pb-4 mx-auto md:mx-0"
            />
            <div className="text-blue-800 font-medium break-words whitespace-normal">
              Chamni's Eye Public Company Limited, 311 Seri 6 Road, Suanluang,
              Suanluang, Bangkok 10250, Thailand
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end gap-6 text-center md:text-left w-full">
            <div className="font-medium space-y-2">
              <p className="text-orange-600">Contact us</p>
              <div className="space-y-2 text-blue-800">
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <span className="text-white text-xs bg-blue-800 p-1 rounded-md">
                    <BsLine />
                  </span>
                  <p className="hover:underline break-words">
                    <a href="">@floc.friends</a>
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <BsFillTelephoneFill />
                  <p className="break-words">(+66) 095-536-9944</p>
                </div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <IoIosMail className="text-2xl -mx-0.5" />
                  <p className="hover:underline break-words">
                    <a href="">support@floc.is</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="font-medium space-y-2">
              <p className="text-orange-600">About</p>
              <div className="space-y-2 text-blue-800">
                <p className="hover:underline">
                  <a href="">Help Center</a>
                </p>
                <p className="hover:underline">
                  <a href="">Terms and Conditions</a>
                </p>
                <p className="hover:underline">
                  <a href="">Privacy Policy</a>
                </p>
              </div>
            </div>

            <div className="font-medium space-y-2">
              <p className="text-orange-600">Follow us</p>
              <div className="flex gap-4 text-2xl text-blue-800 justify-center md:justify-start">
                <a href="">
                  <FaFacebook className="hover:-translate-y-1 transition-transform duration-300" />
                </a>
                <a href="">
                  <BsInstagram className="hover:-translate-y-1 transition-transform duration-300" />
                </a>
                <a href="">
                  <RiTwitterXFill className="hover:-translate-y-1 transition-transform duration-300" />
                </a>
                <a href="">
                  <FaTiktok className="hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <footer className="text-medium text-violet-400 font-medium text-center md:text-end mt-6 break-words whitespace-normal">
          Copyright © Floc 2024 | All rights reserved.
        </footer>
      </div>
    </div>
  );
}
