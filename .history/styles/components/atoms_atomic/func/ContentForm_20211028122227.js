import { useContext, useState } from "react";
import { StateContext } from "./StateContext";
import Cookie from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";

const cookie = new Cookie();

export default function ContentForm() {
  const { selectedContent, setSelectedContent } = useContext(StateContext);

  const create = async (e) => {
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
    setSelectedTraining({
      id_training: 0,
      training_type: "",
      weight: 0,
      set1: 0,
      set2: 0,
      set3: null,
    });
    // trainingCreated();
    alert("done");
    history.back();
  };

  const update = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/content/${selectedTraining.id}`, {
      method: "PUT",
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
      id_training: 0,
      training_type: "",
      weight: 0,
      set1: 0,
      set2: 0,
      set3: null,
    });
    // trainingCreated();
  };

  return (
    <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* form - start */}
        <form
          class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          onSubmit={create}
        >
          <div class="flex">
            <div class="mr-8">
              <label
                for="id_training"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Id of training*
              </label>
              <br />
              <input
                name="id_training"
                type="text"
                onChange={(e) =>
                  setSelectedTraining({
                    ...selectedTraining,
                    created_at: e.target.value,
                  })
                }
                class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-5 py-3 shadow-lg"
              />
            </div>

            <div class="sm:col-span-2 mr-8">
              <label
                for="place"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Place*
              </label>
              <br />
              <select
                name="place"
                value={selectedTraining.place ? selectedTraining.place : "zym"}
                onChange={(e) =>
                  setSelectedTraining({
                    ...selectedTraining,
                    place: e.target.value,
                  })
                }
                class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-7 py-3 shadow-lg"
              >
                <option value="zym">Zym</option>
                <option value="home">Home</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label
                for="evaluation"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Evaluation*
              </label>
              <br />
              <select
                name="evaluation"
                value={
                  selectedTraining.evaluation
                    ? selectedTraining.evaluation
                    : "good"
                }
                onChange={(e) =>
                  setSelectedTraining({
                    ...selectedTraining,
                    evaluation: e.target.value,
                  })
                }
                class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-7 py-3 shadow-lg"
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="normal">Normal</option>
                <option value="bad">Bad</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="review"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Review or Memo
            </label>
            <textarea
              name="review"
              class="w-full  bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-3 py-7 shadow-2xl"
              onChange={(e) =>
                setSelectedTraining({
                  ...selectedTraining,
                  review: e.target.value,
                })
              }
              placeholder="If you have review or memo for this tarining, please write down here!!"
            ></textarea>
          </div>

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
        {/* form - end */}
      </div>
    </div>
  );
}