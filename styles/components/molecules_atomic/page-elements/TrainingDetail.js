import Cookie from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";
import Content from "./Content";

// const cookie = new Cookie();

export default function TrainingDetail({
  training,
  trainingDeleted,
  contents,
}) {
  // --- delete func ---
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
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
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
            <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4 animate-pulse">
              About training
            </h2>

            <p class="text-gray-600 font-semibold sm:text-lg mb-6 md:mb-8">
              <div class="mb-3 text-xl font-semibold text-gray-700">
                トレーニング内容
              </div>
              <p class="text-base">
                {/* トレーニング場所 ： {training.place == "zym" && "御殿下ジム"}
                  <br /> */}
                ・自己評価(4段階) ：{" "}
                {training.evaluation == "excellent" && "完璧"}{" "}
                {training.evaluation == "good" && "上出来"}{" "}
                {training.evaluation == "normal" && "普通"}{" "}
                {training.evaluation == "bad" && "悪い"}
                <br />
                <div class="pt-2 flex">
                  {training.review && "・レビュー ："}
                  {training.review}
                </div>
              </p>
            </p>

            <table class="table-fixed text-left font-normal italic text-gray-500 pb-1 md:pb-2">
              <tr>
                <th class="w-56 pl-3">Type</th>
                <th class="w-40 pl-3">Menu</th>
                <th class="pl-2">Total Amount</th>
              </tr>
            </table>
            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              {contents &&
                contents.map((content) => (
                  <Content key={content.id} content={content} />
                ))}
            </p>
          </div>
          {/* <PencilAltIcon onClick={() => setSelectedTraining(training)} /> */}
          {/* <TrashIcon onClick={deleteTraining} /> */}

          <div>
            <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg lg:pt-4 py-12 pb-16 px-6">
              {training.place == "zym" && (
                <img
                  src="https://training-rest.herokuapp.com/media/images/dumbbell.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center rounded-full shadow-2xl"
                />
              )}
              {training.place == "home" && (
                <img
                  src="https://training-rest.herokuapp.com/media/images/run.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center rounded-full shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
