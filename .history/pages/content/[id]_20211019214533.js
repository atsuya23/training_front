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
const apiUrl = `${RESTAPI_URL}api/list-training/`;

export default function Content({ filteredContents, id }) {
  const router = useRouter();
  const { data: contents, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: filteredContents,
  });
  const sortedContents = contents?.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );
  useEffect(() => {
    mutate();
  }, []);

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
  const { content: filteredContents } = await getContentDate(params.id);
  return {
    props: {
      id: filteredContents.id,
      filteredContents,
    },
    revalidate: 3,
  };
}
