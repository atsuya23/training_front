import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import { mutate } from "swr";
import { getAllContentType, getContentByType } from "../../styles/components/atoms_atomic/func/contentFunc";
import Content from "../../styles/components/molecules_atomic/page-elements/Content";

export default function ContentSortedType({ contents }) {
  const router = useRouter();

  if (router.isFallback || !contents) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    mutate();
  }, []);
  return (
    <Layout title="test">
      <Content contents={contents} contentDeleted={mutate} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllContentType()
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const contents = await getContentByType(params.type);
  return {
    props: {
      contents,
    },
    revalidate: 3,
  };
}
