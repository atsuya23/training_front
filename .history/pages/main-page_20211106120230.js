import React from "react";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

import Layout from "../styles/components/organisms_atomic/Layout";
import RegisterButton from "../styles/components/atoms_atomic/button/RegisterButton";
import ModifyButton from "../styles/components/atoms_atomic/button/ModifyButton";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (
    <Layout title="Main-page">
      <div class="bg-gray-100 sm:pb-8 lg:pb-12  flex-grow">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section class="min-h-96 flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-lg  relative py-16 md:py-20 xl:py-48">
            {/* image - start */}

            <img
              src="https://training-rest.herokuapp.com/media/images/push-up_kVUwaor.png"
              loading="lazy"
              alt="Photo by Fakurian Design"
              class="w-full h-full object-cover object-center absolute inset-0"
            />
            {/* image - end */}

            {/* overlay - start */}
            <div class="bg-indigo-500 mix-blend-multiply absolute inset-0 shadow-2xl"></div>
            {/* overlay - end */}

            {/* text start */}
            <div class="sm:max-w-xl flex flex-col items-center relative p-4">
              <p class="text-indigo-100 text-lg sm:text-xl text-center mb-4 md:mb-8">
                For your good training life
              </p>
              <h1 class="animate-pulse text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 ">
                Revolutionary way
                <br />
                to record training days
              </h1>

              <div class="animate-bounce w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                <ModifyButton />

                <RegisterButton />
              </div>
            </div>
            {/* text end */}
          </section>
        </div>
      </div>

      {/* Galley */}
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
              <h2 class="text-gray-800 text-3xl lg:text-4xl font-bold">
                Components
              </h2>

              <p class="max-w-screen-sm hidden md:block text-gray-500 italic">
                本サイトの主要なページは以下の通りです。 <br />
                それぞれのページにクリックすることで移動が可能です。詳細については右の「more」を参照下さい。
              </p>
            </div>

            <a
              href="record-page"
              class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 "
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
                Record
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
                Regsiter
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
                Goal
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
                Plan
              </span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
