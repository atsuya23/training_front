import useSWR from "swr";
import { useEffect } from "react";
import { RESTAPI_URL } from "../Secret";

import Layout from "../styles/components/organisms_atomic/Layout";
import { getAllTraining } from "../styles/components/atoms_atomic/func/trainingFunc";
import Training from "../styles/components/molecules_atomic/page-elements/Training";

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${RESTAPI_URL}api/list-training/`;

export default function HistoryPage({ filteredTrainings }) {
  const { data: training, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: filteredTrainings,
  });
  const sortedTrainings = training?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  useEffect(() => {
    mutate();
  }, []);

  return (
    <Layout title="History Page">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              History
            </h2>
            <p class="max-w-screen-md text-gray-500 text-center mx-auto italic">
              本ページは、トレーニングの記録の一覧を閲覧するページとなります。
              <br />
              これまでのトレーニング日について簡潔にまとめ、シンプルな記載で作成されています。
              <br />
              各項目の日付をクリックすることで、それぞれの詳細なトレーニング内容などを確認することが出来ます。
            </p>
          </div>
          {/* text - end */}
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
            {sortedTrainings &&
              sortedTrainings.map((training) => (
                <Training key={training.id} training={training} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredTrainings = await getAllTraining();
  return {
    props: { filteredTrainings },
    revalidate: 3,
  };
}