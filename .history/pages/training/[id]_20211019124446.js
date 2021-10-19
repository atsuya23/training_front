import { useRouter } from "next/router";
import Layout from "../../styles/components/organisms_atomic/Layout";
import { getTrainingDate } from "../../styles/components/atoms_atomic/func/getTrainingDate";
import { getAllTrainingId } from "../../styles/components/atoms_atomic/func/getAllTrainingId";

export default function Training({ training }) {
  const router = useRouter();

  if (router.isFallback || !training) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={`Training date : ${training.created_at}`}>
      {training.id}
      {training.created_at}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllTrainingId();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { training: training } = await getTrainingDate(params.id);
  return {
    props: {
      training,
    },
    revalidate: 3,
  };
}
