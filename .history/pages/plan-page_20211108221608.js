import Layout from "../styles/components/organisms_atomic/Layout";

export default function PlanPage() {
  return (
    <Layout>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Blog
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* text - end */}

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {/* article - start */}
            <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    New trends in Tech
                  </a>
                </h2>

                <p class="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div class="flex justify-between items-end mt-auto">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Brock Wegner"
                        class="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span class="block text-indigo-500">Mike Lane</span>
                      <span class="block text-gray-400 text-sm">
                        July 19, 2021
                      </span>
                    </div>
                  </div>

                  <span class="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}

            {/* article - start */}
            <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Working with legacy stacks
                  </a>
                </h2>

                <p class="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div class="flex justify-between items-end mt-auto">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by peter bucks"
                        class="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span class="block text-indigo-500">Jane Jackobs</span>
                      <span class="block text-gray-400 text-sm">
                        April 07, 2021
                      </span>
                    </div>
                  </div>

                  <span class="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}

            {/* article - start */}
            <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>

                <p class="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div class="flex justify-between items-end mt-auto">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Jassir Jonis"
                        class="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span class="block text-indigo-500">Tylor Grey</span>
                      <span class="block text-gray-400 text-sm">
                        March 15, 2021
                      </span>
                    </div>
                  </div>

                  <span class="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}

            {/* article - start */}
            <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>

                <p class="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div class="flex justify-between items-end mt-auto">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Aiony Haust"
                        class="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span class="block text-indigo-500">Ann Park</span>
                      <span class="block text-gray-400 text-sm">
                        January 27, 2021
                      </span>
                    </div>
                  </div>

                  <span class="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}
          </div>
        </div>
      </div>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Plan for my goal
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              本ページでは、目標の達成に向けて取り組む内容についてまとめてあります。
              <br />
              以下の各トレーニングは基本的なメニューであり、継続的に内容に組み込むことでメニューの根管とします。
              <br />
              様々な刺激を取り入れるため、単一的でない重量・レップ数・スピードでのトレーニングをすることが重要です。
            </p>
          </div>
          {/* text - end */}

          <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
            {/* person - start */}
            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by Radu Florin"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  John McCulling
                </div>
                <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  Founder / CEO
                </p>
              </div>
            </div>
            {/* person - end */}

            {/* person - start */}
            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by christian ferrer"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  Kate Berg
                </div>
                <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  CFO
                </p>
              </div>
            </div>
            {/* person - end */}

            {/* person - start */}
            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by Ayo Ogunseinde"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  Greg Jackson
                </div>
                <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  CTO
                </p>
              </div>
            </div>
            {/* person - end */}

            {/* person - start */}
            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by Midas Hofstra"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  Robert Greyson
                </div>
                <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  Creative Director
                </p>
              </div>
            </div>
            {/* person - end */}

            {/* person - start */}
            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by Elizeu Dias"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  John Roberts
                </div>
                <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  Investor Relations
                </p>
              </div>
            </div>
            {/* person - end */}

            {/* person - start */}
            <div class="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                  loading="lazy"
                  alt="Photo by Matheus Ferrero"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <div class="text-indigo-500 md:text-lg font-bold text-center sm:text-left">
                  Judy Amandez
                </div>
                <p class="text-gray-500 text-sm md:text-base text-center sm:text-left">
                  Senior Art Director
                </p>
              </div>
            </div>
            {/* person - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
