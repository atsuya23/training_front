import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Layout from "../styles/components/organisms_atomic/Layout";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (
    <>
      <Layout title="Main-page">
        {/* MainPage */}
        <div class="bg-gray-100 sm:pb-8 lg:pb-12 pt-4 flex-grow">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <section class="min-h-96 flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
              {/* image - start */}
              <img
                src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
                loading="lazy"
                alt="Photo by Fakurian Design"
                class="w-full h-full object-cover object-center absolute inset-0"
              />
              {/* image - end */}

              {/* overlay - start */}
              <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
              {/* overlay - end */}

              {/* text start */}
              <div class="sm:max-w-xl flex flex-col items-center relative p-4">
                <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
                  Very proud to introduce
                </p>
                <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
                  Revolutionary way to build the web
                </h1>

                <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                  <a
                    href="#"
                    class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    Start now
                  </a>

                  <a
                    href="#"
                    class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    Take tour
                  </a>
                </div>
              </div>
              {/* text end */}
            </section>
          </div>
        </div>
        {/* MainPage end */}

        {/* Galley */}
        <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
              <div class="flex items-center gap-12">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                  Gallery
                </h2>

                <p class="max-w-screen-sm hidden md:block text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>

              <a
                href="#"
                class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
              >
                More
              </a>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
              {/* image - start */}
              <a
                href="#"
                class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  VR
                </span>
              </a>
              {/* image - end */}

              {/* image - start */}
              <a
                href="#"
                class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  Tech
                </span>
              </a>
              {/* image - end */}

              {/* image - start */}
              <a
                href="#"
                class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  Dev
                </span>
              </a>
              {/* image - end */}

              {/* image - start */}
              <a
                href="#"
                class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
                />

                <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  Retro
                </span>
              </a>
              {/* image - end */}
            </div>
          </div>
        </div>
        <svg
          onClick={logout}
          className="nt-10 cursor-pointer w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
      </Layout>
    </>
  );
}
