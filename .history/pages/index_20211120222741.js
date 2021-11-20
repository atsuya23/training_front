import Auth from "../styles/components/pages_atomic/Auth";
import Layout from "../styles/components/organisms_atomic/Layout";

export default function Home() {
  return (
    <Layout title="Record Training enter">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <section class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="flex flex-wrap justify-between mb-8 md:mb-16">
            <div class="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
              <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
                Record your
                <br />
                training date
              </h1>

              <p class="max-w-md italic text-gray-500 xl:text-lg leading-relaxed">
                トレーニング記録を管理し、まとめたWebサイトです。
                <br />
                Web勉強を目的として、記録等をまとめ上げられるように設計がされています。
              </p>
            </div>

            <div class="w-full lg:w-2/3 flex mb-12 md:mb-16">
              <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                <img
                  src="https://training-rest.herokuapp.com/media/images/side_rise.jpg"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  class="w-full h-full object-cover object-center"
                />
              </div>

              <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://training-rest.herokuapp.com/media/images/woo.jpg"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="w-64 h-12 flex border rounded-lg overflow-hidden divide-x">
              <a
                href="#"
                class="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100"
              >
                Men
              </a>
              <a
                href="#"
                class="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100"
              >
                Women
              </a>
              <a
                href="#"
                class="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100"
              >
                Teens
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
