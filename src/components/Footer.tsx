import { BsLine } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="mx-[70px] my-[36px]">
        <div className="flex justify-between">
          <div className="w-[288px]">
            <img
              src="https://assets.floc.is/general/floc-full-logo-no-tm.svg"
              alt="floc"
              className="w-[140px] h-[144px] pb-[16px]"
            />
            <div className="text-blue-800 font-medium">
              Chamni's Eye Public Company Limited 311 Seri 6 Road, Suanluang,
              Suanluang, Bangkok 10250 Thailand
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="font-medium space-y-2">
              <p className="text-orange-600">Contact us</p>
              <div className="space-y-2 text-blue-800">
                <div className="flex gap-2 items-center">
                  <span className="text-white text-xs bg-blue-800 p-1 rounded-md">
                    <BsLine />
                  </span>
                  <p className="hover:underline">
                    <a href="">@floc.friends</a>
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <p>(+66) 095-536-9944</p>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-2xl -mx-0.5">
                    <IoIosMail />
                  </span>
                  <p className="hover:underline">
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
              <div className="flex gap-5 text-2xl text-blue-800">
                <a href="">
                  <FaFacebook className="hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
                </a>
                <a href="">
                  <BsInstagram className="hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
                </a>
                <a href="">
                  <RiTwitterXFill className="hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
                </a>
                <a href="">
                  <FaTiktok className="hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-medium text-violet-400 font-medium text-end">
          Copyright © Floc 2024 | All rights reserved.
        </footer>
      </div>
    </div>
  );
}
