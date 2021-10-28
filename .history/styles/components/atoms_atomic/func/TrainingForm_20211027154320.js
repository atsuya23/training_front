import { useContext } from "react";
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
      body: JSON.stringify({ created_at: selectedTraining.created_at }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedTask({ id: 0, created_at: "" });
    // trainingCreated();
  };

  const update = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/training/${selectedTraining.id}`, {
      method: "PUT",
      body: JSON.stringify({ created_at: selectedTraining.created_at }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedTask({ id: 0, created_at: "" });
    // trainingCreated();
  };
  return (
    <>
      <div>
        <form onSubmit={selectedTraining.id !== 0 ? update : create}>
          <input
            className="text-black mb-8 px-2 py-1"
            type="text"
            value={selectedTraining.created_at}
            onChange={(e) =>
              setSelectedTraining({
                ...selectedTraining,
                created_at: e.target.value,
              })
            }
          />
        </form>
        <button type="submit">
          {selectedTraining.id !== 0 ? "update" : "create"}
        </button>
      </div>

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
            onSubmit={selectedTraining.id !== 0 ? update : create}
          >
            <div>
              <label
                for="first-name"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                First name*
              </label>
              <input
                name="first-name"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                for="last-name"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Last name*
              </label>
              <input
                name="last-name"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="company"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Company
              </label>
              <input
                name="company"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email*
              </label>
              <input
                name="email"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="subject"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Subject*
              </label>
              <input
                name="subject"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Message*
              </label>
              <textarea
                name="message"
                class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div class="sm:col-span-2 flex justify-between items-center">
              <button class="inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3">
                Register
              </button>
              <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Send
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
    </>
  );
}
