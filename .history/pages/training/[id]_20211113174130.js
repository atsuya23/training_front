import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import TrainingDetail from "../../styles/components/molecules_atomic/page-elements/TrainingDetail";
import {
  getTrainingDate,
  getAllTrainingId,
} from "../../styles/components/atoms_atomic/func/trainingFunc";
import { mutate } from "swr";
import StateContextProvider from "../../styles/components/atoms_atomic/func/StateContext";
import { getContentByTrainingId } from "../../styles/components/atoms_atomic/func/contentFunc";

export default function Training({ training, contents }) {
  const router = useRouter();
  console.log(contents)

  if (router.isFallback || !training) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    mutate();
  }, []);
  return (
    <Layout title={`Training date : ${training.created_at}`}>
      <TrainingDetail
        training={training}
        trainingDeleted={mutate}
        trainingId={training.id}
      />
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
  const contents = await getContentByTrainingId(params.id);

  return {
    props: {
      training, contents
    },
    revalidate: 3,
  };
}
