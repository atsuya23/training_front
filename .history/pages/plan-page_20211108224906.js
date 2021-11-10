import Layout from "../styles/components/organisms_atomic/Layout";
import PlanCard from "../styles/components/molecules_atomic/page-elements/PlanCard";

export default function PlanPage() {
  return (
    <Layout>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Plan for my goal
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              本ページでは、目標の達成に向けて取り組む内容についてまとめてあります。
              <br />
              以下の各トレーニングは基本的なメニューであり、継続的に内容に組み込むことでメニューの根管とします。
              <br />
              様々な刺激を取り入れるため、単一的でない重量・レップ数・スピードでのトレーニングをすることが重要です。
            </p>
          </div>
          {/* text - end */}

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {/* article - start */}
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              explain=""
              picPath=""
              ideal="80Kg * 8reps"
            />
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              explain=""
              picPath=""
              ideal="80Kg * 8reps"
            />
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              explain=""
              picPath=""
              ideal="80Kg * 8reps"
            />
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              explain=""
              picPath=""
              ideal="80Kg * 8reps"
            />
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              explain=""
              picPath=""
              ideal="80Kg * 8reps"
            />
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              explain=""
              picPath=""
              ideal="80Kg * 8reps"
            />
            {/* article - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
