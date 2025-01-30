import { FaPlus } from "react-icons/fa6";

export function FAQ() {
  return (
    <div className="bg-blue-800 pt-6 justify-items-center text-center">
      <p className="text-white text-5xl font-semibold">FAQs</p>
      <div className="bg-white w-[90%] rounded-[80px] py-12 px-12 mt-12 mb-6 ">
        <div className="flex gap-4 text-2xl tracking-wide font-medium items-center py-6 hover:bg-gray-100 transition-colors">
          <span className="text-blue-800">
            <FaPlus />
          </span>
          How to find the talent using Floc?
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex gap-4 text-2xl tracking-wide font-medium items-center py-6 hover:bg-gray-100 transition-colors">
          <span className="text-blue-800">
            <FaPlus />
          </span>
          How can I start a job searching on Floc?
        </div>
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex gap-4 text-2xl tracking-wide font-medium items-center py-6 hover:bg-gray-100 transition-colors">
          <span className="text-blue-800">
            <FaPlus />
          </span>
          Are there any additional or hidden costs on Floc?
        </div>
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex gap-4 text-2xl tracking-wide font-medium items-center py-6 hover:bg-gray-100 transition-colors">
          <span className="text-blue-800">
            <FaPlus />
          </span>
          What types of freelance project are available on Floc?
        </div>
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex gap-4 text-2xl tracking-wide font-medium items-center py-6 hover:bg-gray-100 transition-colors">
          <span className="text-blue-800">
            <FaPlus />
          </span>
          How can I be confident in the quality of Floc's talents?
        </div>
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex gap-4 text-2xl tracking-wide font-medium items-center py-6 hover:bg-gray-100 transition-colors">
          <span className="text-blue-800">
            <FaPlus />
          </span>
          Are jobs on Floc reliable?
        </div>
        <hr className="h-px my-0.5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
    </div>
  );
}
