import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../styles/components/organisms_atomic/Layout";
import {
  getAllContentId,
  getContentDate,
} from "../../styles/components/atoms_atomic/func/contentFunc";

export async function fetStaticPaths() {
  const paths = await getAllContentId();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { content: statiContent } = await getContentDate(params.id);
  return {
    props: {
      id: statiContent.id,
      statiContent,
    },
    revalidate: 3,
  };
}
