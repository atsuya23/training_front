import { PencilIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

import ModifyButton from "../atoms_atomic/button/ModifyButton";
import RegisterButton from "../atoms_atomic/button/RegisterButton";

export default function Header() {
  return (
    <div class="bg-gray-300 sticky top-0 z-50 shadow-md">
      <div class="max-w-screen-xl md:pr-4 mx-auto">
        <header class=" flex justify-between items-center md:py-1">
          {/* logo - start */}
          <Link href="../about-page">
            <a
              class="hover:text-indigo-700 hover:underline inline-flex items-center text-gray-600 text-2xl md:text-3xl font-extrabold gap-2.5 mb-3"
              aria-label="logo"
            >
              <PencilIcon class="w-8 h-9 text-indigo-600 animate-pulse" />
              Record Training
            </a>
          </Link>
          {/* logo - end */}

          {/* nav - start */}
          <nav class="hidden lg:flex gap-7 mt-1 ml-8 underline">
            <Link href="../main-page">
              <a class="text-gray-500 hover:text-indigo-500 hover:bg-gray-200 rounded-lg active:text-indigo-700 text-lg font-semibold transition duration-100 px-1">
                Main
              </a>
            </Link>
            <Link href="record-page">
              <a class="inline-flex items-center text-gray-500 hover:text-indigo-500 hover:bg-gray-200 rounded-lg active:text-indigo-700 text-lg font-semibold transition duration-100 px-1">
                Record
              </a>
            </Link>
            <Link href="../goal-page">
              <a class="text-gray-500 hover:text-indigo-500 active:text-indigo-700 hover:bg-gray-200  rounded-lg text-lg font-semibold transition duration-100 px-1">
                Goal
              </a>
            </Link>
            <Link href="../plan-page">
              <a class="text-gray-500 hover:text-indigo-500 active:text-indigo-700 hover:bg-gray-200 rounded-lg text-lg font-semibold transition duration-100 px-1">
                Plan
              </a>
            </Link>
            <a
              href="plan-page"
              class="text-gray-500 hover:text-indigo-500 active:text-indigo-700 hover:bg-gray-200 rounded-lg text-lg font-semibold transition duration-100 px-1"
            >
              Motivation
            </a>
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
