import { useState } from "react";
import { getAllMemo } from "../styles/components/atoms_atomic/func/memoFunc";
import Memo from "../styles/components/molecules_atomic/page-elements/Memo";

import Layout from "../styles/components/organisms_atomic/Layout";

export default function MemoyPage() {
  const [numberOfOpenBar, setNumberOfOpenBar] = useState(0);

  return (
    <Layout
      title="Memo Page"
      heading="Memorandum"
      pageEx1="本ページは、備忘録用のページになります。"
      pageEx2="ここにメモを残すことで、記憶の定着や振り返りに役立たせます。"
      pageEx3="各項目の内容については、クリックで確認することが出来ます。＊種類別にソートすることが出来ます。"
    >
      <div class="flex flex-col max-w-screen-lg border-t mx-auto px-5">
        {/* question - start */}
        <div class="border-b">
          <div class="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
            <span class="md:text-lg font-semibold transition duration-100">
              What are the features?
            </span>

            <span class="text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
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

          <p class="hidden text-gray-500 mb-4">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing.
          </p>
        </div>
        {/* question - end */}

        <Memo />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const memos = await getAllMemo();
  return {
    props: { memos },
    revalidate: 3,
  };
}