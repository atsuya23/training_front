import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../styles/components/organisms_atomic/Layout";
import {
  getAllContentId,
  getContentDate,
} from "../../styles/components/atoms_atomic/func/contentFunc";

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${RESTAPI_URL}api/list-content/${id}`;

export default function Content({ filteredContent, id }) {
  const router = useRouter();
  const { data: content, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: filteredContent,
  });
  const sortedContent = content?.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );
  useEffect(() => {
    mutate();
  }, []);
  if (router.isFallback || !contents)
    return (
      <Layout title={`Content date : ${id}`}>
        {filteredContents.training_type}
      </Layout>
    );
}

export async function fetStaticPaths() {
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
