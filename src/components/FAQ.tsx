import { FaPlus } from "react-icons/fa6";

export function FAQ() {
  return (
    <div className="bg-blue-800 pt-6 text-center flex justify-center">
      <div className="w-full max-w-3xl">
        <p className="text-white text-4xl md:text-5xl font-semibold">FAQs</p>
        <div className="bg-white w-[90%] mx-auto rounded-[40px] md:rounded-[80px] py-8 px-6 md:py-12 md:px-12 mt-8 md:mt-12 mb-6 text-left">
          <div className="flex gap-4 text-lg md:text-2xl tracking-wide font-medium items-center py-4 md:py-6 hover:bg-gray-100 transition-colors">
            <span className="text-blue-800">
              <FaPlus />
            </span>
            How to find the talent using Floc?
          </div>
          <hr className="h-px bg-gray-200 border-0" />
          <div className="flex gap-4 text-lg md:text-2xl tracking-wide font-medium items-center py-4 md:py-6 hover:bg-gray-100 transition-colors">
            <span className="text-blue-800">
              <FaPlus />
            </span>
            How can I start a job searching on Floc?
          </div>
          <hr className="h-px bg-gray-200 border-0" />
          <div className="flex gap-4 text-lg md:text-2xl tracking-wide font-medium items-center py-4 md:py-6 hover:bg-gray-100 transition-colors">
            <span className="text-blue-800">
              <FaPlus />
            </span>
            Are there any additional or hidden costs on Floc?
          </div>
          <hr className="h-px bg-gray-200 border-0" />
          <div className="flex gap-4 text-lg md:text-2xl tracking-wide font-medium items-center py-4 md:py-6 hover:bg-gray-100 transition-colors">
            <span className="text-blue-800">
              <FaPlus />
            </span>
            What types of freelance projects are available on Floc?
          </div>
          <hr className="h-px bg-gray-200 border-0" />
          <div className="flex gap-4 text-lg md:text-2xl tracking-wide font-medium items-center py-4 md:py-6 hover:bg-gray-100 transition-colors">
            <span className="text-blue-800">
              <FaPlus />
            </span>
            How can I be confident in the quality of Floc's talents?
          </div>
          <hr className="h-px bg-gray-200 border-0" />
          <div className="flex gap-4 text-lg md:text-2xl tracking-wide font-medium items-center py-4 md:py-6 hover:bg-gray-100 transition-colors">
            <span className="text-blue-800">
              <FaPlus />
            </span>
            Are jobs on Floc reliable?
          </div>
          <hr className="h-px bg-gray-200 border-0" />
        </div>
      </div>
    </div>
  );
}
