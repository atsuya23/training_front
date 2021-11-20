import Layout from "../styles/components/organisms_atomic/Layout";
import EachTraining from "../styles/components/molecules_atomic/page-elements/EachTraining";

export default function RespectivePage() {
  return (
    <Layout title="Respective-home">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Respective trainings
        </h2>
        <p class="max-w-screen-md text-gray-500 text-center mx-auto italic">
          本ページは、主に取り組んでいるトレーニング種目の一覧が記されています。
          <br />
          各種目をクリックすることで、そろぞれ種目単位での過去の記録を総覧することが出来ます。
        </p>

        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto mt-16">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-2">
            {/* each training - start */}
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/bench_press.jpg"
              menuName="ベンチプレス"
              type="bench_press"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/incline_bench_press.jpg"
              menuName="インクラインベンチプレス"
              type="incline_bench_press"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/decline_bench_press.jpg"
              menuName="デクラインベンチプレス"
              type="decline_bench_press"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/dumbbell_press.jpg"
              menuName="ダンベルプレス"
              type="dumbbell_press"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/shoulder_press.jpg"
              menuName="ショルダープレス"
              type="shoulder_press"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/lat_pull_down.jpg"
              menuName="ラットプルダウン"
              type="lat_pull_down"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/arm_curl.jpg"
              menuName="アームカール"
              type="arm_curl"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/tri_over_head.jpg"
              menuName="トライセプスエクステンション"
              type="over_head_press"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/chinning.jpg"
              menuName="チンニング"
              type="chinning"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/dips.jpg"
              menuName="ディップス"
              type="dips"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/side_rise.jpg"
              menuName="サイドレイズ"
              type="side_rise"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/push-up.jpg"
              menuName="腕立て伏せ"
              type="push-up"
            />
            {/* each training - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
