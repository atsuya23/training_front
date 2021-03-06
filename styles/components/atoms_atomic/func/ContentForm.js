import { useContext, useState } from "react";
import { StateContext } from "./StateContext";
import Cookie from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";

const cookie = new Cookie();

export default function ContentForm() {
  const { selectedContent = 0, setSelectedContent } = useContext(StateContext);

  const update = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/content/${selectedContent.id}`, {
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
    setSelectedContent({
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
    <>
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
            <option value="bench_press">??????????????????</option>
            <option value="incline_bench_press">
              ????????????????????????????????????
            </option>
            <option value="dumbbell_press">?????????????????????</option>
            <option value="shoulder_press">????????????????????????</option>
            <option value="chinning">???????????????</option>
            <option value="push-up">?????????</option>
            <option value="over_head_press">??????????????????????????????</option>
            <option value="side_rise">??????????????????</option>
            <option value="arm-curl">??????????????????</option>
            <option value="kick_back">??????????????????</option>
            <option value="arm_variations">????????????</option>
            <option value="something_new">?????????</option>
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
    </>
  );
}
