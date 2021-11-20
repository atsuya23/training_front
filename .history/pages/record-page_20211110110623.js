import Layout from "../styles/components/organisms_atomic/Layout";
import RecordElement from "../styles/components/molecules_atomic/page-elements/RecordElemenets";

export default function RecordPage() {
  return (
    <Layout title="Record-home">
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
              Record
              
            </h2>

            <p class="max-w-screen-md text-gray-400 text-center mx-auto italic">
              本ページは、トレーニングの記録を閲覧するページとなります。
              <br />
              これまでの記録や継続性を可視化することによって、最終的な目標達成への筋道を確認します。
              <br />
              また、記録を取ることによって今後の振り返りやモチベーションの向上を強く刺激します。
            </p>
          </div>
          {/* text - end */}

          <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            <RecordElement
              top="Summary"
              title="Training history"
              text="このセクションはトレーニングの日時とその他概要を簡略的にまとめたものになります。"
              ex="Date, Place, Evaluation, etc..."
              imgSource="https://training-rest.herokuapp.com/media/images/push-up.png"
              link="history-page"
            />

            <RecordElement
              top="Detail"
              title="Training content"
              text="このセクションはトレーニング内容をまとめており、種目毎の内容を確認できます。"
              ex="Menu, Sets, Eeps, Weight, etc..."
              imgSource="https://training-rest.herokuapp.com/media/images/bench_press_1.jpg"
              link=""
            />
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
