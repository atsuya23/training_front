export default function Training({ training }) {
  return (
    <>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
        {/* person - start */}
        <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
          <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              class="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
              {training.created_at}
            </div>
            <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
              CTO
            </p>
          </div>
        </div>
        {/* person - end */}
      </div>
      <div>
        <span>{training.id}</span>
        {" : "}
        <span className="cursor-pointer border-b border-collapse hover:bg-gray-500">
          {training.created_at}
        </span>
      </div>
    </>
  );
}
