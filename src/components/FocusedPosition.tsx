export function FocusedPosition() {
  return (
    <div className="py-16 space-y-12 justify-items-center">
      <div className="space-y-2 font-bold text-3xl md:text-5xl tracking-wide md:tracking-lg text-center">
        <div>At Floc, we bring together</div>
        <div>the best of these positions</div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <button className="border border-blue-800 bg-blue-800 rounded-full px-4 py-1.5 font-medium text-yellow-200">
          Strategy & Creative
        </button>
        <button className="border border-blue-800 rounded-full px-4 py-1.5 font-medium text-blue-800 hover:bg-blue-800 hover:text-yellow-200 hover:opacity-50 active:bg-blue-800 active:text-yellow-200 active:opacity-100 transition-all">
          Visual & Motion Design
        </button>
        <button className="border border-blue-800 rounded-full px-4 py-1.5 font-medium text-blue-800 hover:bg-blue-800 hover:text-yellow-200 hover:opacity-50 active:bg-blue-800 active:text-yellow-200 active:opacity-100 transition-all">
          Production
        </button>
        <button className="border border-blue-800 rounded-full px-4 py-1.5 font-medium text-blue-800 hover:bg-blue-800 hover:text-yellow-200 hover:opacity-50 active:bg-blue-800 active:text-yellow-200 active:opacity-100 transition-all">
          Media
        </button>
        <button className="border border-blue-800 rounded-full px-4 py-1.5 font-medium text-blue-800 hover:bg-blue-800 hover:text-yellow-200 hover:opacity-50 active:bg-blue-800 active:text-yellow-200 active:opacity-100 transition-all">
          Social Media & Others
        </button>
        <button className="border border-blue-800 rounded-full px-4 py-1.5 font-medium text-blue-800 hover:bg-blue-800 hover:text-yellow-200 hover:opacity-50 active:bg-blue-800 active:text-yellow-200 active:opacity-100 transition-all">
          Event & Experience
        </button>
        <button className="border border-blue-800 rounded-full px-4 py-1.5 font-medium text-blue-800 hover:bg-blue-800 hover:text-yellow-200 hover:opacity-50 active:bg-blue-800 active:text-yellow-200 active:opacity-100 transition-all">
          Product Design
        </button>
      </div>
      <div className="flex justify-between gap-4">
        <div className="border border-gray-300 rounded-lg p-4 space-y-2">
          <img
            src="https://floc.is/icons/landing/focused-position/business-coching.svg"
            alt="jigsaw lightbulb"
            className="w-[48px] h-[48px]"
          />
          <p className="font-medium">Marketing & Strategy</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Brand Strategist</li>
            <li>Content Strategist</li>
            <li>Strategic Planner</li>
          </ul>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 space-y-2">
          <img
            src="https://floc.is/icons/landing/focused-position/design-process-pen.svg"
            alt="pencil lightbulb"
            className="w-[48px] h-[48px]"
          />
          <p className="font-medium">Creative Advertising</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Art Director</li>
            <li>Copy Writer</li>
            <li>Creative Director</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
