export function JoinUs() {
  return (
    <div className="bg-blue-800 py-12 px-4 sm:px-8">
      <div className="bg-white py-10 px-4 sm:px-8 text-center space-y-8 rounded-2xl max-w-3xl mx-auto">
        <div>
          <img
            src="https://floc.is/icons/landing/floco.svg"
            alt="blue bird"
            className="w-12 h-10 mx-auto"
          />
        </div>
        <div className="space-y-3 text-2xl sm:text-4xl font-semibold sm:font-bold leading-snug">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <span>Let’s join</span>
            <img
              src="https://assets.floc.is/general/floc-full-logo-no-tm.svg"
              alt="floc"
              className="w-24 h-8 sm:w-28 sm:h-10"
            />
            <span>to create</span>
          </div>
          <div>exceptional quality work together</div>
        </div>
        <div className="space-y-2">
          <button className="border border-black font-semibold text-base sm:text-lg rounded-3xl bg-black text-white px-6 sm:px-8 py-2 hover:bg-blue-800 transition-colors">
            Join us
          </button>
          <p className="italic font-medium text-sm sm:text-base">
            For hirers, Floc service pricing can be viewed{" "}
            <span className="text-blue-700 hover:underline">
              <a href="">here</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
