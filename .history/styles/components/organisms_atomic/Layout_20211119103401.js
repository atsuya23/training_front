import Head from "next/head";

import Header from "../molecules_atomic/Header";
import Footer from "../molecules_atomic/Footer";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div class="bg-gray-100 py-6 sm:pt-8 lg:pt-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              {heading}
            </h2>

            <p class="max-w-screen-md text-gray-400 text-center mx-auto italic">
              {pageEx1}
              <br />
              {pageEx2}
              <br />
              {pageEx3}
            </p>
          </div>
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
}
