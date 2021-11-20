import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link href="../register-page">
      <a class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-semibold text-indigo-600 transition duration-300 ease-out border-2 border-gray-800 rounded-full shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
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
        <span class="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 transform group-hover:translate-x-full ease">
          Button Text
        </span>
        <span class="relative invisible">Button Text</span>
      </a>
    </Link>
  );
}
