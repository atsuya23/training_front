import Link from "next/link";
import { useState } from "react";

import ModifyButton from "../atoms_atomic/button/ModifyButton";
import RegisterButton from "../atoms_atomic/button/RegisterButton";
import SideBar from "./SideBar";

export default function Header() {
  const [isOpenBar, setIsOpenBar] = useState(false);
  return (
    <>
      <div class="bg-gray-800 sticky top-0 z-50 shadow-xl rounded-2xl opacity-80">
        <div class="max-w-screen-xl md:pr-4 mx-auto pt-1">
          <header class=" flex justify-between items-center py-1 md:py-1">
            {/* logo - start */}
            <Link href="../main-page">
              <div
                class="hover:text-gray-50 inline-flex items-center text-gray-300 text-2xl md:text-3xl font-extrabold gap-2.5 mb-3 hover:bg-gray-600 px-4 rounded-3xl ml-2 hover:opacity-100 cursor-pointer"
                aria-label="logo"
              >
                <img
                  src="https://training-rest.herokuapp.com/media/images/dumbbell_icon.jpg"
                  class="w-10 h-10 rounded-full animate-pulse"
                />
                Record Training
              </div>
            </Link>
            {/* logo - end */}

            {/* nav - start */}
            <nav class="hidden lg:flex gap-7 mt-1 ml-7">
              <Link href="../main-page">
                <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline hover:opacity-100">
                  Main
                </a>
              </Link>
              <Link href="../record-page">
                <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline hover:opacity-100">
                  Record
                </a>
              </Link>
              <Link href="../goal-page">
                <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline hover:opacity-100">
                  Goal
                </a>
              </Link>
              <Link href="../plan-page">
                <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline hover:opacity-100">
                  Plan
                </a>
              </Link>
              <Link href="../memo-page">
                <a class="text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg active:text-gray-300 text-lg font-semibold transition duration-100 px-1 hover:underline hover:opacity-100">
                  Memo
                </a>
              </Link>
            </nav>
            {/* nav - end */}

            {/* buttons - start */}
            <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 ml-8">
              {/* <ModifyButton /> */}
              {/* <RegisterButton /> */}
            </div>

            <button
              type="button"
              class="inline-flex items-center lg:hidden bg-white hover:bg-gray-200 hover:text-indigo-500 focus-visible:ring ring-indigo-300 text-gray-700 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2 mb-1 mr-2"
              onClick={() => setIsOpenBar(!isOpenBar)}
            >
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              Menu
            </button>
            {/* buttons - end */}
          </header>
        </div>
      </div>
      {isOpenBar && (
        <SideBar isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />
      )}
    </>
  );
}
