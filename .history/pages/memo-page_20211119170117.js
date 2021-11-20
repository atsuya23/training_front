import Layout from "../styles/components/organisms_atomic/Layout";

export default function MemoyPage() {
  return (
    <Layout
      title="Memo Page"
      heading="Memorandum"
      pageEx1="本ページは、備忘録用のページになります。"
      pageEx2="ここにメモを残すことで、記憶の定着や振り返りに役立たせます。"
    >
     
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredTrainings = await getAllTraining();
  return {
    props: { filteredTrainings },
    revalidate: 3,
  };
}
