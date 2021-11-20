import Layout from "../styles/components/organisms_atomic/Layout";

export default function RespectivePage() {
  return (
    <Layout title="Respective-home">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Respective trainings
        </h2>
        <p class="max-w-screen-md text-gray-500 text-center mx-auto italic">
          本ページは、主に取り組んでいるトレーニング種目の一覧が記されています。
          <br />
          各種目をクリックすることで、そろぞれ種目単位での過去の記録を総覧することが出来ます。
        </p>

        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto mt-16">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
            {/* product - start */}
            
            {/* product - end */}

            {/* product - start */}
            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col">
                <span class="text-gray-500">Women</span>
                <a
                  href="#"
                  class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Summer Season
                </a>
              </div>
            </div>
            {/* product - end */}

            {/* product - start */}
            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col">
                <span class="text-gray-500">Men</span>
                <a
                  href="#"
                  class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Streetwear
                </a>
              </div>
            </div>
            {/* product - end */}

            {/* product - start */}
            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col">
                <span class="text-gray-500">Women</span>
                <a
                  href="#"
                  class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  Sale
                </a>
              </div>
            </div>
            {/* product - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
