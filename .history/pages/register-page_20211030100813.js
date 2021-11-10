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
  const createTraining = async (e) => {
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

  const createContent = async (e) => {
    e.preventDefault();
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
    setSelectedContent({
      id_training: 0,
      training_type: "",
      weight: 0,
      set1: 0,
      set2: null,
      set3: null,
    });
    // trainingCreated();
    alert("cotent done");
    history.back();
  };

  return (
    <Layout>
      <StateContextProvider>
        <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            {/* text - start */}
            <div class="mb-10 md:mb-16">
              <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Register training
              </h2>

              <p class="max-w-screen-md text-gray-500 md:text- text-center mx-auto italic">
                本ページは、行ったトレーニング内容を記録・登録するページとなります。
                <br />
                記録内容は、トレーニングを行った状況（場所、日付など）とトレーニング内容（種目、重量など）になります。
                <br />
                可能な限り、トレーニングを行ったその日に記録をすることで効率的な振り返りや記録穴が生じることを防ぎます。
              </p>
            </div>
            {/* text - end */}

            <form
              class="max-w-screen-md gap-4 mx-auto"
              onSubmit={(createTraining, createContent)}
            >
              <TrainingForm />
              <br />
              <ContentForm />
              <div class="sm:col-span-2 flex justify-between items-center mt-7">
                <button
                  type="submit"
                  class="inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3 mt-3 shadow-lg animate-bounce"
                >
                  Create
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
          </div>
        </div>
      </StateContextProvider>
    </Layout>
  );
}
