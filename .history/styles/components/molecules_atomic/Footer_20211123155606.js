export default function Footer() {
  return (
    <div class="bg-gray-100 pt-4 sm:pt-10 lg:pt-12">
      <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center border-gray-400 border-t border-b gap-4 py-6">
          {/* nav - start */}
          <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
            <a
              href="../main-page"
              class="text-gray-700 hover:text-indigo-700 hover:underline active:text-indigo-600 transition duration-100"
            >
              メイン
            </a>
            <a
              href="../record-page"
              class="text-gray-700 hover:text-indigo-700 hover:underline active:text-indigo-600 transition duration-100"
            >
              記録
            </a>
            <a
              href="../goal-page"
              class="text-gray-700 hover:text-indigo-700 hover:underline active:text-indigo-600 transition duration-100"
            >
              目標
            </a>
            <a
              href="../plan-page"
              class="text-gray-700 hover:text-indigo-700 hover:underline active:text-indigo-600 transition duration-100"
            >
              計画
            </a>
            <a
              href="../memo-page"
              class="text-gray-700 hover:text-indigo-700 hover:underline active:text-indigo-600 transition duration-100"
            >
              備忘録
            </a>
          </nav>
          {/* nav - end */}
        </div>

        <div class="text-gray-400 text-sm text-center py-8">
          © Recod Training Presented by Wata. -- All rights reserved --
        </div>
      </footer>
    </div>
  );
}
