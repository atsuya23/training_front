import Layout from "../styles/components/organisms_atomic/Layout";
import PlanCard from "../styles/components/molecules_atomic/page-elements/PlanCard";

export default function PlanPage() {
  return (
    <Layout title="Plan page">
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
              main="大胸筋"
              sub="上腕三頭筋、三角筋"
              explain="Big3種目の高重量を扱った上半身トレーニング。目標重量を設定している種目でもあり、上半身を総合的に鍛えるためトレーニングの主軸種目とする。"
              danger="肩周りへの負荷が大きくフォームの向上が必要"
              picPath=""
              ideal="80Kg * 8reps"
            />{" "}
            <PlanCard
              menuName="Incline bench press"
              set="8reps * 2sets + α"
              main="大胸筋(上部)"
              sub="上腕三頭筋、三角筋"
              explain="スミスマシンを使うことで、1人のトレーニングでも高重量で追い込むことが可能。スミスマシンとインクラインベンチの特徴を活かしストレッチ性を高めての追い込み種目。"
              danger="ストレッチ性があるため肩の痛みに注意"
              picPath=""
              ideal="60Kg * 8reps"
            />{" "}
            <PlanCard
              menuName="Dumbbell press"
              set="10reps * 2sets + α"
              main="大胸筋（下部、内側）"
              sub="上腕三頭筋、三角筋"
              explain="ベンチプレス系では大胸筋の手幅の都合上、大胸筋の収縮が十分に行うことが困難であるため、ダンベル種目では特に収縮を意識する。フォームはフレキシブルに対応するが、ダンベルでは下部・内側への刺激を主とする。"
              picPath=""
              ideal="80Kg * 8reps"
            />{" "}
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              main="大胸筋"
              sub="上腕三頭筋、三角筋"
              explain="Big3種目の高重量を扱った上半身トレーニング。目標重量を設定している種目でもあり、上半身を総合的に鍛えるためトレーニングの主軸種目とする。"
              danger="肩周りへの負荷が大きくフォームの向上が必要"
              picPath=""
              ideal="80Kg * 8reps"
            />{" "}
            <PlanCard
              menuName="Bench press"
              set="8reps * 3sets + α"
              main="大胸筋"
              sub="上腕三頭筋、三角筋"
              explain="Big3種目の高重量を扱った上半身トレーニング。目標重量を設定している種目でもあり、上半身を総合的に鍛えるためトレーニングの主軸種目とする。"
              danger="肩周りへの負荷が大きくフォームの向上が必要"
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
