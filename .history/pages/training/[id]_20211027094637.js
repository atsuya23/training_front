import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import TrainingDetail from "../../styles/components/molecules_atomic/page-elements/TrainingDetail";
import {
  getTrainingDate,
  getAllTrainingId,
} from "../../styles/components/atoms_atomic/func/trainingFunc";
import { getContentIdByTrainingId } from "../../styles/components/atoms_atomic/func/contentFunc";
import { mutate } from "swr";
import StateContextProvider from "../../styles/components/atoms_atomic/func/StateContext";

export default function Training({ training }) {
  const router = useRouter();

  if (router.isFallback || !training) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    mutate();
  }, []);
  return (
    <StateContextProvider>
      <Layout title={`Training date : ${training.created_at}`}>
        <TrainingDetail training={training} trainingDeleted={mutate} />
      </Layout>
    </StateContextProvider>
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
