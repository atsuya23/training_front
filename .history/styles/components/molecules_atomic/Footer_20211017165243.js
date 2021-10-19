export default function Footer() {
  return (
    <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6">
          {/* nav - start */}
          <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
            <a
              href="#"
              class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              About
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Investor Relations
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Jobs
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Press
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Blog
            </a>
          </nav>
          {/* nav - end */}

          
        </div>

        <div class="text-gray-400 text-sm text-center py-8">
          © Recod Training  Presented by Wata.  -- All rights reserved --
        </div>
      </footer>
    </div>
  );
}
