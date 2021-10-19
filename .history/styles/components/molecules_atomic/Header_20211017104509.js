import { PencilIcon, ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div class="bg-indigo-100">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header class=" flex justify-between items-center md:py-3">
          {/* logo - start */}
          <a
            href="/"
            class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
            aria-label="logo"
          >
            <PencilIcon class="w-7 h-9 text-indigo-600" />

            <div className="shadow-xl">Record Training</div>
          </a>
          {/* logo - end */}

          {/* nav - start */}
          <nav class="hidden lg:flex gap-12">
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
              <ChevronDownIcon />
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
            <a
              href="about-page"
              class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              About
            </a>
          </nav>
          {/* nav - end */}

          {/* buttons - start */}
          <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <a
              href="#"
              class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
            >
              Sign in
            </a>

            <a
              href="#"
              class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Sign up
            </a>
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
