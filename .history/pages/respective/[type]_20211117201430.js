import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import { mutate } from "swr";
import {
  getAllContentType,
  getContentByType,
} from "../../styles/components/atoms_atomic/func/contentFunc";
import ContentEachTotal from "../../styles/components/molecules_atomic/page-elements/ContentEachTotal";

export default function ContentSortedType({ contents, params }) {
  const router = useRouter();
  console.log(params.type);

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
    <Layout title={`Record`}>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* --- text - start --- */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Record of Bench Press
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* --- text - end --- */}

          {contents &&
            contents.map((content) => (
              <ContentEachTotal
                key={content.id}
                content={content}
                aboutTraining={content.id_training}
              />
            ))}
        </div>
      </div>
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
  const contents = await getContentByType(params.type);
  const params = params;

  return {
    props: {
      contents,
      params,
    },
    revalidate: 3,
  };
}
