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
  console.log(type);

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
    <Layout title={`Record ...`}>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* --- text - start --- */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Record of {type == "bench_press" && "Bench Press"}
              {type == "incline_bench_press" && "Incline Bench Press"}
              {type == "dumbbell_press" && "Dumbbell Press"}
              {type == "shoulder_press" && "Shoulder Press"}
              {type == "chinning" && "Chinning"}
              {type == "push-up" && "Push Up"}
              {type == "over_head_press" && "Tri-seps Extension"}
              {type == "side_rise" && "Side rise"}
              {type == "arm_curl" && "Arm Curl"}
              {type == "kick_back" && "Kick Back"}
              {type == "lat_pull_down" && "ラットプルダウン"}
              {type == "dips" && "Dips"}
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto italic">
              本ページでは、種目毎の記録を基にトレーニング強度の推移を確認することができる。
              <br />
              特に、強度の向上確認や各回における総重量が伸びているかが重要である。{" "}
            </p>
          </div>
          {/* --- text - end --- */}
          <div class="grid md:grid-cols-2">
            <div>
              {contents &&
                contents.map((content) => (
                  <ContentEachTotal
                    key={content.id}
                    content={content}
                    aboutTraining={content.id_training}
                  />
                ))}
            </div>
            <div></div>
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
