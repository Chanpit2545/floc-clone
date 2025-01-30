export function ServiceContact() {
  return (
    <div className="relative flex justify-center items-center pt-16 pb-32 ml-20">
      <div className="grid grid-cols-2">
        <div className="text-center col-span-1 pt-16">
          <h2 className="text-5xl font-bold">Creating new opportunities</h2>
          <p className="text-3xl font-semibold text-gray-800 mt-4">
            Let Floc Full Service team take care of you
          </p>
          <div className="text-gray-500 text-xl font-medium mt-4">
            <p>A one stop service to help </p>
            <p>manage your projects professionally </p>
            <p>from start to finish</p>
          </div>
          <button className="mt-6 bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute right-4 top-12 w-[728px] h-[443px]">
        <img
          src="https://assets.floc.is/landing/dicut.png"
          alt="Floc Team"
          className="w-full h-full object-contain px-10"
        />
      </div>
    </div>
  );
}
