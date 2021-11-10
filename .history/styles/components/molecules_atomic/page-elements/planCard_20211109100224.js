export default function PlanCard({
  menuName,
  set,
  main,
  sub,
  explain,
  picPath,
  ideal,
}) {
  return (
    <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
      <a
        href="#"
        class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
      >
        <img
          src={picPath}
          loading="lazy"
          alt="Photo by Minh Pham"
          class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
        />
      </a>

      <div class="flex flex-col flex-1 p-4 sm:p-6">
        <h2 class="text-gray-800 text-xl font-bold mb-2">
          <a
            href="#"
            class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            {menuName}
          </a>
        </h2>
        <p class="text-center text-bold text-red-400 mb-1 font-bold">{set}</p>
        <p class="text-gray-600 font-semibold">Main : {main}</p>
        <p class="text-gray-600">Sub  : {sub}</p>
        <p class="text-gray-500 mb-8">{explain}</p>

        <div class="flex justify-between items-end mt-auto">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                loading="lazy"
                alt="Photo by Brock Wegner"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <span class="block text-indigo-500">This history</span>
              <span class="block text-gray-400 text-sm">目標：{ideal}</span>
            </div>
          </div>

          <span class="text-gray-500 text-sm border rounded px-2 py-1">
            Article
          </span>
        </div>
      </div>
    </div>
  );
}
