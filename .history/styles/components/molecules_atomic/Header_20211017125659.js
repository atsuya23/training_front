import { PencilIcon, ChevronDownIcon } from "@heroicons/react/solid";

import ModifyButton from "../atoms_atomic/button/ModifyButton";
import RegisterButton from "../atoms_atomic/button/RegisterButton";

export default function Header() {
  return (
    <div class="bg-gray-300">
      <div class="max-w-screen-2xl md:px-8 mx-auto">
        <header class=" flex justify-between items-center md:py-2">
          {/* logo - start */}
          <a
            href="about-page"
            class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 mb-6"
            aria-label="logo"
          >
            <PencilIcon class="w-8 h-9 text-indigo-600" />

            <div className="">Record Training</div>
          </a>
          {/* logo - end */}

          {/* nav - start */}
          <nav class="hidden lg:flex gap-12 mt-3">
            
            <a
              href="main-page"
              class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Main
            </a>
            <a
              href="record-page"
              // class="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1"
              class="inline-flex items-center text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 gap-1"
            >
              Record
              <ChevronDownIcon class="h-5 w-5 text-gray-800" />
            </a>
            <a
              href="goal-page"
              class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Goal
            </a>
            <a
              href="plan-page"
              class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Plan
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
