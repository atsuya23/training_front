import Link from "next/link";
import Cookie from "universal-cookie";
import { TrashIcon } from "@heroicons/react/solid";
import { withRouter } from "next/router";

import { RESTAPI_URL } from "../../../../Secret";
import { render } from "react-dom";

const cookie = new Cookie();

export default function TrainingDetail({ training, trainingDeleted }) {
  const deleteTraining = async () => {
    const deleteSubmit = confirm(
      `「${training.created_at}」の記録内容を全て消して宜しいですか？`
    );
    if (deleteSubmit) {
      await fetch(`${RESTAPI_URL}api/training/${training.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `JWT ${cookie.get("access_token")}`,
        },
      }).then(() => {
        history.back();
        alert(`「${training.created_at}」の記録内容は消去されました。`);
      });
      trainingDeleted();
    }
  };

  return (
    <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div class="md:pt-8">
            <p class="text-indigo-700 font-bold text-center md:text-left">
              Training Detail
            </p>

            <h1 class="text-gray-800 text-2xl sm:text-3xl pt-2 font-bold text-center md:text-left mb-4 md:mb-6">
              {training.created_at}
              <div class="text-gray-600 pl-4 text-xl sm:text-2xl pt-2 inline-block">
                at {training.place}
              </div>
            </h1>

            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              <div class="mb-2">
                {training.created_at}のトレーニング内容は下記の通り。
              </div>
              <p class="text-base">
                トレーニング場所 ： {training.place == "zym" && "御殿下ジム"}
                <br />
                自己評価(4段階) ：{" "}
                {training.evaluation == "excellent" && "完璧"}{" "}
                {training.evaluation == "good" && "上出来"}{" "}
                {training.evaluation == "normal" && "普通"}{" "}
                {training.evaluation == "bad" && "悪い"}
                <br />
                {training.review && "レビュー、メモ ："} {training.review}
              </p>
            </p>

            <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">
              About us
            </h2>

            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p>
          </div>

          <TrashIcon onClick={deleteTraining} />
        </div>
      </div>
    </div>
  );
}
