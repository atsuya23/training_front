import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link href="../register-page">
      {/* Include CDN JavaScript  */}

      {/* <a class="inline-block bg-indigo-500 hover:bg-indigo-800 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-gray-200 text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3 border-gray-500 border hover:text-white">
        Register
      </a> */}

      <a
        
        class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-100 transition-all duration-150 rounded-full hover:pl-10 hover:pr-6 bg-indigo-600 opacity-100 group ease-in-out"
      >
        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            class="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 ">
          <svg
            class="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Button Text
        </span>
      </a>
    </Link>
  );
}
