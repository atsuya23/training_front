import Layout from "../styles/components/organisms_atomic/Layout";

export default function RecordPage() {
  return (
    <Layout title="Record-home">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
              Record
            </h2>

            <p class="max-w-screen-md text-gray-400 md:text-l text-center mx-auto">
              本ページは、トレーニングの記録を閲覧するページとなります。
              <br />
              これまでの記録や継続性を可視化することによって、最終的な目標達成への筋道を確認します。
              <br />
              また、記録を取ることによって今後の振り返りやモチベーションの向上を強く刺激します。
            </p>
          </div>
          {/* text - end */}

          <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            {/* article - start */}
            <div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="training-page"
                class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-3xl shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-gray-400 text-sm">Continuity</span>

                <h2 class="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Training history
                  </a>
                </h2>

                <p class="text-gray-500">
                  This is a section of simple information about training days.
                  <br />
                  ex: date, place, evaluation, etc...
                </p>

                <div>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}

            {/* article - start */}
            <div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-3xl shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-gray-400 text-sm">Detail</span>

                <h2 class="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Training content
                  </a>
                </h2>

                <p class="text-gray-500">
                  This is a section of detail information about training content.
                  <br />
                  ex: menu, sets number, reps number, etc...
                </p>

                <div>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}

            {/* article - start */}
            <div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-3xl shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-gray-400 text-sm">March 15, 2021</span>

                <h2 class="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>

                <p class="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>

                <div>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}

            {/* article - start */}
            <div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
              <a
                href="#"
                class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-3xl shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-gray-400 text-sm">January 27, 2021</span>

                <h2 class="text-gray-800 text-xl font-bold">
                  <a
                    href="#"
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>

                <p class="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>

                <div>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
