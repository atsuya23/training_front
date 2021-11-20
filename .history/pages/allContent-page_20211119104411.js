import Layout from "../styles/components/organisms_atomic/Layout";
import { getAllContent } from "../styles/components/atoms_atomic/func/contentFunc";
import Content from "../styles/components/molecules_atomic/page-elements/Content";

export default function AllContentPage({ filteredContents }) {
  return (
    <Layout
      title="History Page"
      heading="History"
      pageEx1="本ページは、トレーニングの記録の一覧を閲覧するページとなります。"
      pageEx2="これまでのトレーニング日について簡潔にまとめ、シンプルな記載で作成されています。"
      pageEx3="各項目の日付をクリックすることで、それぞれの詳細なトレーニング内容などを確認することが出来ます。"
    >
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
        {filteredContents &&
          filteredContents.map((content) => (
            <Content key={content.id} content={content} />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredContents = await getAllContent();
  return {
    props: { filteredContents },
    revalidate: 3,
  };
}
