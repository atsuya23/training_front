import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

import RegisterButton from "../styles/components/atoms_atomic/button/RegisterButton";
import ModifyButton from "../styles/components/atoms_atomic/button/ModifyButton";
import Footer from "../styles/components/molecules_atomic/Footer";
import Header from "../styles/components/molecules_atomic/Header";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Header />
      {/* <script src="https://unpkg.com/tailwindcss-jit-cdn"></script> */}
      <div class="bg-gray-100 sm:pb-8 lg:pb-12  flex-grow">
        <div class="">
          <section class="flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-2xl  relative py-16 md:py-20 xl:py-48 min-h-screen">
            {/* image - start */}

            <img
              src="https://training-rest.herokuapp.com/media/images/push-up.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              class="w-full h-full object-cover object-center absolute inset-0 drop-shadow-lg"
            />
            {/* image - end */}

            {/* overlay - start */}
            <div class="bg-indigo-300 mix-blend-multiply absolute inset-0 shadow-2xl"></div>
            {/* overlay - end */}

            {/* text start */}
            <div class="sm:max-w-xl flex flex-col items-center relative p-4">
              <p class="text-indigo-100 text-lg sm:text-xl text-center mb-4 md:mb-8">
                For your good training life
              </p>
              <h1 class="animate-pulse text-white text-4xl sm:text-5xl md:text-5xl  font-bold text-center mb-8 md:mb-12 inline-block">
                Revolutionary way
                <br />
                to record training days
              </h1>

              <div class="animate-bounce w-full flex flex-col sm:flex-row sm:justify-center gap-2.5 mt-4">
                {/* <ModifyButton />

                <RegisterButton /> */}
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
                ???????????????????????????????????????????????????????????? <br />
                ????????????????????????????????????????????????????????????????????????????????????????????????????????????more????????????????????????
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
              href="../record-page"
              class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative "
            >
              <img
                src="https://training-rest.herokuapp.com/media/images/wellDone.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 hover:scale-125"
              />

              <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span class="inline-block font-semibold text-white md:text-xl relative ml-4 md:ml-5 mb-3">
                Record
              </span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="../register-page"
              class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://training-rest.herokuapp.com/media/images/memo.jpg"
                loading="lazy"
                alt="Photo by Magicle"
                class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 hover:scale-50"
              />
              <div class="bg-indigo-100 mix-blend-multiply absolute inset-0 shadow-2xl"></div>

              <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span class="inline-block font-semibold text-white md:text-xl relative ml-4 md:ml-5 mb-3">
                Regsiter
              </span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="../goal-page"
              class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://training-rest.herokuapp.com/media/images/goal_100Kg.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 hover:scale-125"
              />
              <div class="bg-indigo-100 mix-blend-multiply absolute inset-0 shadow-2xl"></div>

              <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span class="inline-block font-semibold text-white md:text-xl relative ml-4 md:ml-5 mb-3">
                Goal
              </span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="../plan-page"
              class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://training-rest.herokuapp.com/media/images/plan.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 hover:scale-125"
              />

              <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span class="inline-block font-semibold text-white md:text-xl relative ml-4 md:ml-5 mb-3">
                Plan
              </span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
