import { getAllMemo } from "../styles/components/atoms_atomic/func/memoFunc";
import Memo from "../styles/components/molecules_atomic/page-elements/Memo";

import Layout from "../styles/components/organisms_atomic/Layout";

export default function MemoyPage({ memos }) {
  return (
    <Layout
      title="Memo Page"
      heading="Memorandum"
      pageEx1="本ページは、備忘録用のページになります。"
      pageEx2="ここにメモを残すことで、記憶の定着や振り返りに役立たせます。"
      pageEx3="各項目の内容については、クリックで確認することが出来ます。＊種類別にソートすることが出来ます。"
    >
      <div class="flex flex-col max-w-screen-lg border-t border-dotted border-gray-300 mx-auto px-5">
        {memos && memos.map((memo) => <Memo key={memo.id} memo={memo} />)}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const memos = await getAllMemo();
  return {
    props: { memos },
    revalidate: 3,
  };
}
