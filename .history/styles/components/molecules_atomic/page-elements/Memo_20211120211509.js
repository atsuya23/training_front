import { useState } from "react";

export default function Memo({ memo }) {
  const [isOpenDetailBar, setIsOpenDetailBar] = useState(false);

  return (
    <div class="border-gray-500 border-dotted border-t">
      <button class="flex justify-between text-black hover:text-indigo-500 hover:underline active:text-indigo-600 cursor-pointer gap-2 py-4">
        <span class="md:text-lg font-semibold transition duration-100">
          {memo.title}
        </span>

        <span class="transform">
          {isOpenDetailBar && (
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              ></path>
            </svg>
          )}
          {!isOpenDetailBar && (
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
              ></path>
            </svg>
          )}
        </span>
      </button>

      <p class="text-gray-500 mb-4">{memo.memo}</p>
    </div>
  );
}
