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
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
            {/* each training - start */}
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/bench_press_1.jpg"
              menuName="ベンチプレス"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/incline_bench_press.jpg"
              menu="インクラインベンチプレス"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/dumbbell_press.jpg"
              menu="ダンベルプレス"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/shoulder_press.jpg"
              menu="ダンベルプレス"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/armcurl.jpg"
              menu="アームカール"
            />
            <EachTraining
              picPath="https://training-rest.herokuapp.com/media/images/tri_over_head.jpeg"
              menu="トライセプスエクステンション"
            />
            <EachTraining picPath="https://training-rest.herokuapp.com/media/images/chinning.jpg" menu="チンニング" />
            <EachTraining picPath="https://training-rest.herokuapp.com/media/images/dips.jpg" menu="ディップス" />
            <EachTraining picPath="" menu="" />
            <EachTraining picPath="" menu="" />
            <EachTraining picPath="" menu="" />
            {/* each training - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
