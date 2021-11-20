import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import { mutate } from "swr";
import {
  getAllContentType,
  getContentByType,
} from "../../styles/components/atoms_atomic/func/contentFunc";
import ContentEachTotal from "../../styles/components/molecules_atomic/page-elements/ContentEachTotal";
import { getTrainingDate } from "../../styles/components/atoms_atomic/func/trainingFunc";

export default function ContentSortedType({
  contents,
  contentsWithCreated_at,
}) {
  console.log(contentsWithCreated_at);
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
  let contentsWithCreated_at = {};
  contents.map((content) => {
    contentWithCreated_at = {
      ...content,
      content_created_at: getTrainingDate(content.id_training),
    };
    contentsWithCreated_at = new { contentsWithCreated_at, contentWithCreated_at };
  });
  return {
    props: {
      contents,
      contentsWithCreated_at,
    },
    revalidate: 3,
  };
}
