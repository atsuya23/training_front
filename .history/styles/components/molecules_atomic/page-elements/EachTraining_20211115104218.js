import Link from "next/link";

export default function EachTraining({ picPath, menuName }) {
  return (
    <div class="group">
      <a
        href="#"
        class="group h-80 block bg-gray-100 rounded-3xl overflow-hidden shadow-2xl mb-2 lg:mb-3"
      >
        <img
          src={picPath}
          loading="lazy"
          alt="Photo by Austin Wade"
          class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
        />
      </a>

      <div class="flex flex-col">
        {/* <span class="text-gray-500">Men</span> */}
        <a
        href="#"
        class="text-gray-800 gropu-hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-4 lg-mb-6"
      ></a>
      </div>
    </div>
  );
}
