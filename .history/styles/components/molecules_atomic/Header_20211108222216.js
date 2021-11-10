import { PencilIcon } from "@heroicons/react/solid";
import Link from "next/link";

import ModifyButton from "../atoms_atomic/button/ModifyButton";
import RegisterButton from "../atoms_atomic/button/RegisterButton";

export default function Header() {
  return (
    <div class="bg-black sticky top-0 z-50 shadow-md">
      <div class="max-w-screen-xl md:pr-4 mx-auto">
        <header class=" flex justify-between items-center py-1 md:pt-1 md:pb-1">
          {/* logo - start */}
          <Link href="../main-page">
            <div
              class="hover:text-gray-50 inline-flex items-center text-gray-300 text-2xl md:text-3xl font-extrabold gap-2.5 mb-3 animate-pulse hover:bg-gray-600 pb-1 px-4 rounded-3xl ml-2 "
              aria-label="logo"
            >
              <PencilIcon class="w-8 h-9 text-gray-300 animate-pulse" />
              Record Training
            </div>
          </Link>
          {/* logo - end */}

          {/* nav - start */}
          <nav class="hidden lg:flex gap-7 mt-1 ml-8 ">
            <Link href="../main-page">
              <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline">
                Main
              </a>
            </Link>
            <Link href="../record-page">
              <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline">
                Record
              </a>
            </Link>
            <Link href="../goal-page">
              <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline">
                Goal
              </a>
            </Link>
            <Link href="../plan-page">
              <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline">
                Plan
              </a>
            </Link>
            <Link href="../plan-page">
              <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline">
                Motivation
              </a>
            </Link>
          </nav>
          {/* nav - end */}

          {/* buttons - start */}
          <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <ModifyButton />
            <RegisterButton />
          </div>

          <button
            type="button"
            class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Menu
          </button>
          {/* buttons - end */}
        </header>
      </div>
    </div>
  );
}
