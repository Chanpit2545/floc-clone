export function JoinUs() {
  return (
    <div className="bg-blue-800 py-12">
      <div className="bg-white py-12 mx-16 text-center justify-items-center space-y-12 rounded-2xl">
        <div>
          <img
            src="https://floc.is/icons/landing/floco.svg"
            alt="blue bird"
            className="w-[64px] h-[44px]"
          />
        </div>
        <div className="space-y-3 text-5xl font-bold">
          <div className="flex justify-center items-center gap-4">
            Let’s join{" "}
            <span>
              <img
                src="https://assets.floc.is/general/floc-full-logo-no-tm.svg"
                alt="floc"
                className="w-[108px] h-[32px]"
              />
            </span>
            to create
          </div>
          <div>exceptional quality work together</div>
        </div>
        <div className="space-y-2">
          <button className="border border-black font-semibold text-lg rounded-3xl bg-black text-white px-8 py-2.5 hover:bg-blue-800 transition-colors">
            Join us
          </button>
          <p className="italic font-semibold">
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
