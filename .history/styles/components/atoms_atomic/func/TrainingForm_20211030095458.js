import { useContext, useState } from "react";
import { StateContext } from "./StateContext";
import Cookie from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";
import ContentForm from "./ContentForm";

const cookie = new Cookie();

export default function TrainingForm() {
  const { selectedTraining, setSelectedTraining } = useContext(StateContext);

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
      evaluation: "good",
      place: "zym",
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
    <>
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
            onChange={(e) =>
              setSelectedTraining({
                ...selectedTraining,
                created_at: e.target.value,
              })
            }
            defaultValue={date}
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
              selectedTraining.evaluation ? selectedTraining.evaluation : "good"
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

      {/* form - end */}
    </>
  );
}
