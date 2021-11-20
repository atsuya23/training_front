import { getTrainingDate } from "../../atoms_atomic/func/trainingFunc";

export default function ContentEachTotal({ content, training }) {
  console.log(training);
  return (
    <>
      {/* --- Content start --- */}
      <div class="flex flex-col sm:flex-row gap-2 md:gap-4 border-b border-dotted border-gray-400">
        <div class="text-gray-600 font-normal inline-block md:text-xl text-left py-3 pl-2">
          <table class="table-fixed">
            <tr>
              <th class="w-48 text-sm md:text-base">
                {content.training_type == "bench_press" && "ベンチプレス"}
                {content.training_type == "incline_bench_press" &&
                  "インクラインベンチプレス"}
                {content.training_type == "dumbbell_press" && "ダンベルプレス"}
                {content.training_type == "shoulder_press" &&
                  "ショルダープレス"}
                {content.training_type == "chinning" && "チンニング"}
                {content.training_type == "push-up" && "腕立て伏せ"}
                {content.training_type == "over_head_press" &&
                  "トライセプスエクステンション"}
                {content.training_type == "side_rise" && "サイドレイズ"}
                {content.training_type == "arm_curl" && "アームカール"}
                {content.training_type == "kick_back" && "キックバック"}
                {content.training_type == "arm_variations" && "上腕総合"}
                {content.training_type == "dips" && "ディップス"}
                {content.training_type == "somehitng_new" && "新種目"}
              </th>
              <th class="w-48 text-red-400 text-sm md:text-lg">
                {" "}
                {content.weight && `${content.weight}Kg * `} ( {content.set1}{" "}
                {content.set2 && `+ ${content.set2}`}{" "}
                {content.set3 && `+ ${content.set3}`} )
              </th>
              <th class="pl-1 text-gray-400 text-base italic">
                (
                {content.set3 &&
                  `${
                    content.weight *
                    (content.set1 + content.set2 + content.set3)
                  }Kg`}
                {content.set2 &&
                  content.set3 == null &&
                  `${content.weight * (content.set1 + content.set2)}Kg`}
                {content.set2 == null &&
                  content.set3 == null &&
                  `${content.weight * content.set1}Kg`}
                )
              </th>
            </tr>
          </table>
        </div>
      </div>
      {/* --- Content end --- */}
    </>
  );
}

export async function getStaticProps({ content }) {
  const { training: training } = await getTrainingDate(
    `${content.id_training}`
  );
  return {
    props: {
      training,
    },
    revalidate: 3,
  };
}
