import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { RESTAPI_URL } from "../../Secret";

import Layout from "../../styles/components/organisms_atomic/Layout";
import {
  getAllContentId,
  getContentDate,
} from "../../styles/components/atoms_atomic/func/contentFunc";

export default function Content({ filteredContent, id }) {
  const router = useRouter();

  if (router.isFallback || !content) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={`Content date : ${id}`}>
      {filteredContents.training_type}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllContentId();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { content: filteredContent } = await getContentDate(params.id);
  return {
    props: {
      id: filteredContent.id,
      filteredContent,
    },
    revalidate: 3,
  };
}
