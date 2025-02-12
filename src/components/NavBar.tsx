import { MdArrowOutward } from "react-icons/md";

export function NavBar() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center  shadow-sm sticky top-0 bg-white z-10">
      <div className="flex justify-between px-4 sm:px-8 py-4 items-center w-full sm:w-full min-w-0 overflow-hidden">
        <a href="" className="min-w-0">
          <img
            src="https://assets.floc.is/general/floc-full-logo-no-tm.svg"
            alt="floc"
            className="h-auto max-h-8 sm:max-h-[32px] w-full max-w-[108px] transition-all duration-300"
          />
        </a>

        <div className="flex gap-4 font-bold text-lg items-center">
          <button className="hidden sm:block text-blue-800 rounded-3xl px-5 py-2.5 hover:bg-blue-200 active:bg-blue-300 transition-colors">
            For business
          </button>

          <button className="rounded-3xl bg-white text-blue-800 px-8 py-2.5 hover:bg-blue-200 active:bg-blue-300 transition-colors">
            Login
          </button>
          <button className="border border-black rounded-3xl bg-black text-white px-8 py-2.5 hover:bg-blue-800 transition-colors">
            Register
          </button>
          <button className="border border-gray-200 text-black rounded-3xl px-5 py-2.5 hover:border-blue-700 active:bg-blue-200 active:text-blue-800 transition-colors">
            US ENG
          </button>
        </div>
      </div>

      <div className="w-full mt-4 sm:hidden">
        <button className="flex items-center justify-center bg-blue-200 text-blue-800 font-bold text-lg px-5 py-2.5 hover:underline active:bg-blue-300 transition-colors w-full">
          For business
          <span className="rounded-full text-blue-800 text-3xl md:text-4xl">
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </header>
  );
}
