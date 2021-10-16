import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Layout from "../styles/components/Layout";

const cookie = new Cookie();

export default function MainPage() {
    const router = useRouter()
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (



      <Layout title="Main-page">
     <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <header class="flex justify-between items-center py-4 md:py-8 mb-4">
      {/* logo - start */}
      <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z"/>
        </svg>

        Flowrift
      </a>
      {/* logo - end */}

      {/* nav - start */}
      <nav class="hidden lg:flex gap-12">
        <a href="#" class="text-indigo-500 text-lg font-semibold">Home</a>
        <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Features</a>
        <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Pricing</a>
        <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
      </nav>
      {/* nav - end */}

      {/* buttons - start */}
      <a href="#" class="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact Sales</a>

      <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      {/* buttons - end */}
    </header>

    <section class="min-h-96 flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
      {/* image - start */}
      <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0">
      {/* image - end */}

      {/* overlay - start */}
      <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
      {/* overlay - end */}

      {/* text start */}
      <div class="sm:max-w-xl flex flex-col items-center relative p-4">
        <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">Very proud to introduce</p>
        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to build the web</h1>

        <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

          <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
        </div>
      </div>
      {/* text end */}
    </section>
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
  );
}
