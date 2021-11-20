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

export default function Training({ training, contents }) {
  const router = useRouter();

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
        contents={contents}
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
  const contents = await getContentByTrainingId(35);
  return {
    props: {
      training, contents
    },
    revalidate: 3,
  };
}
