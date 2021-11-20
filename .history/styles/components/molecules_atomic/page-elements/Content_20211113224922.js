export default function Content({ content }) {
  return (
    <>
      {/* person - start */}
      <div class="flex flex-col sm:flex-row gap-2 md:gap-4 border-b border-dotted border-gray-400">
        {/* <div class="w-20 md:w-24 h-20 md:h-24 bg-gray-100 rounded-full overflow-hidden shadow-3xl cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              class="w-full h-full object-cover object-center"
            />
          </div> */}

        <div>
          <div class="text-gray-600 font-normal inline-block md:text-xl text-left py-3 pl-2">
            <table class="table-fixed">
              <tr>
                <th class="w-48 text-sm md:text-base">
                  {content.training_type == "bench_press" && "ベンチプレス"}
                  {content.training_type == "incline_bench_press" &&
                    "インクラインベンチプレス"}
                  {content.training_type == "dumbbell_press" &&
                    "ダンベルプレス"}
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
                <th class="text-red-400 text-sm md:text-lg">
                  {" "}
                  {content.weight && `${content.weight}Kg * `} ( {content.set1}{" "}
                  {content.set2 && `+ ${content.set2}`}{" "}
                  {content.set3 && `+ ${content.set3}`} )
                </th>
                <th>
                  {content.set3 &&
                    `${
                      content.weight *
                      (content.set1 + content.set2 + content.set3)
                    }`}
                  {content.set2 &&
                    content.set3 == null &&
                    `${content.weight * (content.set1 + content.set2)}`}
                  {(content.set2 == null) | (content.set3 == null) &&
                    `${content.weight * content.set1}`}
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* person - end */}
    </>
  );
}
