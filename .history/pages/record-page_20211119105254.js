import Layout from "../styles/components/organisms_atomic/Layout";
import RecordElement from "../styles/components/molecules_atomic/page-elements/RecordElemenets";

export default function RecordPage() {
  return (
    <Layout
      title="Record Home"
      heading="Record Home"
      pageEx1="本ページは、トレーニングの記録を閲覧するページになります。"
      pageEx2="これまでの記録や継続性を可視化することによって、最終的な目標達成への筋道を確認します。"
      pageEx3="また、記録を取ることによって今後の振り返りやモチベーションの向上を強く刺激します。"
    >
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            <RecordElement
              top="Summary"
              title="Training history"
              text="このセクションはトレーニングの日時とその他概要を簡略的にまとめたものになります。"
              ex="Date, Place, Evaluation, etc..."
              imgSource="https://training-rest.herokuapp.com/media/images/push-up.jpg"
              link="history-page"
            />

            <RecordElement
              top="Respectively"
              title="Training content"
              text="このセクションはトレーニング種目についてをまとめており、種目毎の記録を確認できます。"
              ex="Menu, Sets, Eeps, Weight, etc..."
              imgSource="https://training-rest.herokuapp.com/media/images/bench_press.jpg"
              link="respective-page"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
