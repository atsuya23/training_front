import { useContext } from "react";
import Cookie from "universal-cookie";
import { useEffect } from "react";
import StateContextProvider from "../styles/components/atoms_atomic/func/StateContext";

import { RESTAPI_URL } from "../Secret";
import Layout from "../styles/components/organisms_atomic/Layout";
import TrainingForm from "../styles/components/atoms_atomic/func/TrainingForm";
import ContentForm from "../styles/components/atoms_atomic/func/ContentForm";

const cookie = new Cookie();

export default function RegisterPage() {
  

  return (
    <Layout>
      <StateContextProvider>
        <form
          class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          onSubmit={create}
        >
          <TrainingForm />
          <ContentForm />
          <div class="sm:col-span-2 flex justify-between items-center">
            <button
              type="submit"
              class="inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3 mt-3 shadow-lg animate-bounce"
            >
              {selectedTraining.id !== 0 ? "Update" : "Create"}
            </button>

            <span class="text-gray-500 text-sm">*Required</span>
          </div>

          <p class="text-gray-400 text-xs">
            By signing up to our newsletter you agree to our{" "}
            <a
              href="#"
              class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </StateContextProvider>
    </Layout>
  );
}
