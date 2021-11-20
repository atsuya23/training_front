import { useRouter } from "next/router";
import { useEffect } from "react";
import fetch from "node-fetch"

import Layout from "../../styles/components/organisms_atomic/Layout";
import { mutate } from "swr";
import {
  getAllContentType,
  getContentByType,
} from "../../styles/components/atoms_atomic/func/contentFunc";
import ContentEachTotal from "../../styles/components/molecules_atomic/page-elements/ContentEachTotal";
import { getTrainingDate } from "../../styles/components/atoms_atomic/func/trainingFunc";
import { RESTAPI_URL } from "../../Secret";

export default function ContentSortedType({ contents }) {
  const router = useRouter();

  let total = 0;
  contents.map(
    (content) =>
      (total += content.weight * (content.set1 + content.set2 + content.set3))
  );

  if (router.isFallback || !contents) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    mutate();
  }, []);
  return (
    <Layout title="test">
      {contents &&
        contents.map((content) => (
          <ContentEachTotal
            key={content.id}
            content={content}
            id_training={content.id_training}
          />
        ))}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllContentType();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let contents = await getContentByType(params.type);
  const getdate = async function() {
      contents.map((content) => {
          const date = await fetch(
            new URL(`${RESTAPI_URL}api/detail-training/${id_training}/`)
          ).then((value) => value.json());
      })
  }

  return {
    props: {
      contents,
    },
    revalidate: 3,
  };
}
