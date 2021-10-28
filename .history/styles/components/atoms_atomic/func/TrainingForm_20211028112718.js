import { useContext, useState } from "react";
import { StateContext } from "./StateContext";
import Cookie from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";

const cookie = new Cookie();

export default function TrainingForm() {
  const { selectedTraining, setSelectedTraining } = useContext(StateContext);

  const create = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/training/`, {
      method: "POST",
    //   body: JSON.stringify({
    //     created_at: selectedTraining.created_at,
    //     place: selectedTraining.place,
    //     evaluation: selectedTraining.evaluation,
    //     review: selectedTraining.review,
    //   }),
    body: JSON.stringify({
        created_at: "2022-02-22",
        place: "zym",
        evaluation: "bad",
        review: "test",
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
  };

  const update = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/training/${selectedTraining.id}`, {
      method: "PUT",
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
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const date = `${yyyy}-${mm}-${dd}`;

  return (
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

        {/* form - start */}
        <form
          class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          onSubmit={create}
        >
          <div class="flex">
            <div class="mr-8">
              <label
                for="created_at"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Training day*
              </label>
              <br />
              <input
                name="created_at"
                type="date"
                value={date}
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
                    ...selectedTraining.place,
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
