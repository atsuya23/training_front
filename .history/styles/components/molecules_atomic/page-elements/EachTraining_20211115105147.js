import Link from "next/link";

export default function EachTraining({ picPath, menuName, type }) {
  return (
    <Link href={`/respective/${type}`}>
      <div class="group hover:bg-white px-4 lg:px-6 py-4 rounded-3xl duration-300">
        <a
          href="#"
          class="h-80 block bg-gray-100 rounded-3xl overflow-hidden shadow-2xl mb-2 lg:mb-3"
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
            class="text-gray-800 group-hover:text-indigo-500 group-hover:underline text-lg lg:text-xl font-bold transition duration-100 mb-4 lg-mb-6"
          >
            {menuName}
          </a>
        </div>
      </div>
    </Link>
  );
}
