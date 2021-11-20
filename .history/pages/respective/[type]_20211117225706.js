import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import { mutate } from "swr";
import {
  getAllContentType,
  getContentByType,
} from "../../styles/components/atoms_atomic/func/contentFunc";
import ContentEachTotal from "../../styles/components/molecules_atomic/page-elements/ContentEachTotal";

export default function ContentSortedType({ contents, type }) {
  const router = useRouter();

  let total = 0;
  contents.map(
    (content) =>
      (total += content.weight * (content.set1 + content.set2 + content.set3))
  );

  if (router.isFallback || !contents) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    mutate();
  }, []);
  return (
    <Layout title={`Record of ${type}`}>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* --- text - start --- */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              {type == "bench_press" && "Bench Press"}
              {type == "incline_bench_press" && "Incline Bench Press"}
              {type == "dumbbell_press" && "Dumbbell Press"}
              {type == "shoulder_press" && "Shoulder Press"}
              {type == "chinning" && "Chinning"}
              {type == "push-up" && "Push Up"}
              {type == "over_head_press" && "Tri-seps Extension"}
              {type == "side_rise" && "Side rise"}
              {type == "arm_curl" && "Arm Curl"}
              {type == "kick_back" && "Kick Back"}
              {type == "lat_pull_down" && "Lat Pull Down"}
              {type == "dips" && "Dips"}
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto italic">
              本ページでは、
              {type == "bench_press" && "ベンチプレス"}
              {type == "incline_bench_press" && "インクラインベンチプレス"}
              {type == "dumbbell_press" && "ダンベルプレス"}
              {type == "shoulder_press" && "ショルダープレス"}
              {type == "chinning" && "チンニング"}
              {type == "push-up" && "腕立て伏せ"}
              {type == "over_head_press" && "トライセプスエクステンション"}
              {type == "side_rise" && "サイドレイズ"}
              {type == "arm_curl" && "アームカール"}
              {type == "kick_back" && "キックバック"}
              {type == "lat_pull_down" && "ラットプルダウン"}
              {type == "dips" && "ディップス"}
              の記録がまとめてあり、
              <br />
              強度の向上や総重量のチェックをまとめて見ることが可能です。{" "}
            </p>
          </div>
          {/* --- text - end --- */}
          <div class="grid md:grid-cols-2">
            <div>
              <div class="flex flex-col sm:flex-row gap-2 md:gap-4 border-b border-dotted border-gray-400">
                <div class="text-gray-600 font-normal inline-block md:text-xl text-left py-3 pl-2 md:col-span-2">
                  <table class="table-fixed">
                    <tr class="text-normal md:text-lg italic">
                      <th class="w-36 font-normal ">Date</th>
                      <th class="w-56 font-normal pl-4">Done detail</th>
                      <th class="font-normal">Total Amount</th>
                    </tr>
                  </table>
                </div>
              </div>
              {contents &&
                contents.map((content) => (
                  <ContentEachTotal
                    key={content.id}
                    content={content}
                    aboutTraining={content.id_training}
                  />
                ))}
            </div>
            <div>
              Sum Up：{total > 10 ** 4 ? `${total / 10}t` : `${total}Kg`}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllContentType();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const contents = await getContentByType(params.type);
  const type = params.type;

  return {
    props: {
      contents,
      type,
    },
    revalidate: 3,
  };
}
