import Layout from "../styles/components/organisms_atomic/Layout";
import EachTraining from "../styles/components/molecules_atomic/page-elements/EachTraining";

export default function RespectivePage() {
  return (
    <Layout
      title="Respective-home"
      heading="Respective Trainings"
      pageEx1=" 本ページは、主に取り組んでいるトレーニング種目の一覧が記されています。"
      pageEx2="各種目をクリックすることで、そろぞれ種目単位での過去の記録を総覧することが出来ます。"
    >
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-2">
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
          picPath="https://training-rest.herokuapp.com/media/images/over_head_press.jpg"
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
      </div>
    </Layout>
  );
}
