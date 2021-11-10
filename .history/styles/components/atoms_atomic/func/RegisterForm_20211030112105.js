import { useContext } from "react";

import { StateContext } from "./StateContext";
import ContentForm from "./ContentForm";
import TrainingForm from "./TrainingForm";
import { createTraining, createContent } from "./createFunc";

export default function RegisterForm() {
  const { selectedContent, setSelectedContent } = useContext(StateContext);
  const { selectedTraining, setSelectedTraining } = useContext(StateContext);
  return (
    <form
      class="max-w-screen-md gap-4 mx-auto"
      onSubmit={(createTraining, createContent)}
    >
      {/* form - start */}
      <div class="flex">
        {/* <div> */}
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
            type="number"
            onChange={(e) =>
              setSelectedContent({
                ...selectedContent,
                id_training: e.target.value,
              })
            }
            class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-5 py-3 shadow-lg"
          />
        </div>

        <div class="sm:col-span-2 mr-8">
          <label
            for="training_type"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Type of training*
          </label>
          <br />
          <select
            name="training_type"
            // value={
            //   selectedContent.training_type
            //     ? selectedContent.training_type
            //     : ""
            // }
            onChange={(e) =>
              setSelectedContent({
                ...selectedContent,
                training_type: e.target.value,
              })
            }
            class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-7 py-3 shadow-lg"
          >
            <option value="bench_press">ベンチプレス</option>
            <option value="incline_bench_press">
              インクラインベンチプレス
            </option>
            <option value="dumbbell_press">ダンベルプレス</option>
            <option value="shoulder_press">ショルダープレス</option>
            <option value="chinning">チンニング</option>
            <option value="push-up">腕立て</option>
            <option value="over_head_press">オーバーヘッドプレス</option>
            <option value="side_rise">サイドレイズ</option>
            <option value="arm-curl">アームカール</option>
            <option value="kick_back">キックバック</option>
            <option value="arm_variations">上腕総合</option>
            <option value="something_new">新種目</option>
          </select>
        </div>

        <div class="sm:col-span-2">
          <label
            for="weight"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Weight*
          </label>
          <br />
          <input
            name="weight"
            type="number"
            // defaultValue={
            //   selectedContent.weight ? selectedContent.weight : ""
            // }
            onChange={(e) =>
              setSelectedContent({
                ...selectedContent,
                weight: e.target.value,
              })
            }
            class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-400 px-5 py-3 shadow-lg"
          />
        </div>
      </div>
      <br />
      <div class="flex">
        <div class="sm:col-span-2 mr-8">
          <label
            for="set1"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Set1*
          </label>
          <br />
          <input
            name="set1"
            type="number"
            // value={selectedContent.set1 ? selectedContent.set1 : ""}
            onChange={(e) =>
              setSelectedContent({
                ...selectedContent,
                set1: e.target.value,
              })
            }
            class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-xl outline-none transition duration-400 py-3 shadow-lg w-24"
          />
        </div>
        <div class="sm:col-span-2 mr-8">
          <label
            for="set2"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Set2
          </label>
          <br />
          <input
            name="set2"
            type="number"
            // value={selectedContent.set2 ? selectedContent.set2 : ""}
            onChange={(e) =>
              setSelectedContent({
                ...selectedContent,
                set2: e.target.value,
              })
            }
            class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-xl outline-none transition duration-400 py-3 shadow-lg w-24"
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="set3"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Set3
          </label>
          <br />
          <input
            name="set3"
            type="number"
            // value={selectedContent.set3 ? selectedContent.set3 : ""}
            onChange={(e) =>
              setSelectedContent({
                ...selectedContent,
                set3: e.target.value,
              })
            }
            class="bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-xl outline-none transition duration-400 py-3 shadow-lg w-24"
          />
        </div>
      </div>

      {/* form - end */}
      <br />
      <ContentForm />
      <div class="sm:col-span-2 flex justify-between items-center mt-9">
        <button
          type="submit"
          class="inline-block bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-3xl outline-none transition duration-100 px-6 py-3 mt-3 shadow-lg animate-bounce"
        >
          Create
        </button>

        <span class="text-gray-500 text-sm">*Required</span>
      </div>
    </form>
  );
}
