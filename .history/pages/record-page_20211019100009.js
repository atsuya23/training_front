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
              text="This is a section of simple information about training days."
              ex="date, place, evaluation, etc..."
              imgSource="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              link="history-page"
            />

            <RecordElement
              top="Detail"
              title="Training content"
              text="This is a section of detail information about training content."
              ex="menu, set number, reps number, etc..."
              imgSource="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              link=""
            />
            <RecordElement
              top="Summary"
              title="Training history"
              text="This is a section of simple information about training days."
              ex="date, place, evaluation, etc..."
              imgSource="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              link="history-page"
            />
            <RecordElement
              top="Summary"
              title="Training history"
              text="This is a section of simple information about training days."
              ex="date, place, evaluation, etc..."
              imgSource="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              link="history-page"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
