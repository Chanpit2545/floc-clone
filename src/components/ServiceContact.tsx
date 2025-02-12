export function ServiceContact() {
  return (
    <div className="relative flex justify-center items-center pt-16 pb-32 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center justify-items-center md:text-left pt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold break-words whitespace-normal">
            Creating new opportunities
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-800 mt-4">
            Let Floc Full Service team take care of you
          </p>
          <div className="text-gray-500 text-base text-center sm:text-lg font-medium mt-4 space-y-1">
            <p>A one-stop service to help</p>
            <p>manage your projects professionally</p>
            <p>from start to finish</p>
          </div>
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
            Contact Us
          </button>

          <div className="block md:hidden mt-6">
            <img
              src="https://assets.floc.is/landing/dicut.png"
              alt="Floc Team"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 w-4/5 md:w-3/5 lg:w-3/5 xl:w-[728px] xl:h-[443px]">
        <img
          src="https://assets.floc.is/landing/dicut.png"
          alt="Floc Team"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
