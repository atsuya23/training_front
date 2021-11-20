import { useState } from "react";

export default function Memo({ memo }) {
  const [isOpenDetailBar, setIsOpenDetailBar] = useState(false);

  return (
    <div class="border-b">
      <div class="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
        <span class="md:text-lg font-semibold transition duration-100">
          {memo.title} 
        </span>

        <span class="text-indigo-500 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>

      <p class="text-gray-500 mb-4">{memo.memo}</p>
    </div>
  );
}
