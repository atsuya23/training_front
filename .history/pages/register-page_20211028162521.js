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
  const create = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/training/`, {
      method: "POST",
      body: JSON.stringify({
        created_at: selectedTraining.created_at,
        place: selectedTraining.place,
        evaluation: selectedTraining.evaluation,
        review: selectedTraining.review,
      }),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `JWT ${cookie.get("access_token")}`,
      },
    });

    await fetch(`${RESTAPI_URL}api/content/`, {
      method: "POST",
      body: JSON.stringify({
        id_training: selectedContent.id_training,
        training_type: selectedContent.training_type,
        weight: selectedContent.weight,
        set1: selectedContent.set1,
        set2: selectedContent.set2,
        set3: selectedContent.set3,
      }),

      headers: {
        "Content-Type": "application/json",
        // Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedTraining({
      id: 0,
      created_at: date,
      evaluation: "",
      place: "",
      review: "",
    });
    // trainingCreated();
    alert("done");
    history.back();
  };

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
