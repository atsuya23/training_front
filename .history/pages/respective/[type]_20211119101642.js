import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "../../styles/components/organisms_atomic/Layout";
import { mutate } from "swr";
import {
  getAllContentType,
  getContentByType,
} from "../../styles/components/atoms_atomic/func/contentFunc";
import ContentEachTotal from "../../styles/components/molecules_atomic/page-elements/ContentEachTotal";
import TypeToJap from "../../styles/components/atoms_atomic/changeWord/TypeToJap";
import TypeToEng from "../../styles/components/atoms_atomic/changeWord/TypeToEng";

export default function ContentSortedType({ contents, type }) {
  const router = useRouter();

  let total = 0;
  contents.map(
    (content) =>
      (total += content.weight * (content.set1 + content.set2 + content.set3))
  );

  let repsNum = 0;
  contents.map(
    (content) => (repsNum += content.set1 + content.set2 + content.set3)
  );

  let goalAmount = 0;
  if (type == "bench_press") {
    goalAmount += 10 ** 5;
  } else if (type == "incline_bench_press") {
    goalAmount += 3 * 10 ** 4;
  } else if (type == "lat_pull_down") {
    goalAmount += 6 * 10 ** 4;
  } else if (type == "arm_curl") {
    goalAmount += 5 * 10 ** 3;
  } else if (type == "side_rise") {
    goalAmount += 10 ** 4;
  } else if (type == "decline_bench_press") {
    goalAmount += 3 * 10 ** 5;
  }

  let progress = 0;
  let starNumber = 0;
  if (goalAmount != 0) {
    starNumber += Math.floor((total / goalAmount) * 10);
    progress += Math.floor((total / goalAmount) * 12);
  }

  let remainStarNumber = 10 - starNumber;
  if (remainStarNumber < 0) {
    remainStarNumber = 0;
  }

  if (router.isFallback || !contents) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    mutate();
  }, []);
  return (
    <Layout title={`Record of ${type}`}>
      <div class="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* --- text - start --- */}
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              <TypeToEng type={type} />
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto italic">
              本ページでは、
              <TypeToJap type={type} />
              の記録がまとめてあり、
              <br />
              強度の向上や総重量のチェックをまとめて見ることが可能です。{" "}
            </p>
          </div>
          {/* --- text - end --- */}
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <div class="flex flex-col sm:flex-row gap-2 md:gap-4 border-b border-dotted border-gray-400">
                <div class="text-gray-600 font-normal inline-block md:text-xl text-left py-3 pl-2 md:col-span-2">
                  <table class="table-fixed">
                    <tr class="text-normal md:text-lg italic font-normal">
                      <th class="w-36 pl-6">Date</th>
                      <th class="w-52 pl-6">Done detail</th>
                      <th class="pl-2">Total Amount</th>
                    </tr>
                  </table>
                </div>
              </div>
              {contents &&
                contents.map((content) => (
                  <ContentEachTotal
                    key={content.id}
                    content={content}
                    aboutTraining={content.id_training}
                  />
                ))}
            </div>
            <div>
              <div class="border rounded-3xl bg-blue-300 bg-opacity-30 p-4 shadow-xl mt-5">
                <h3 class="text-gray-800 text-base lg:text-lg font-semibold mb-3 animate-pulse italic text-center">
                  Overall
                </h3>
                <h2 class="text-red-400 text-lg lg:text-xl font-bold mb-3">
                  Sum Up :{" "}
                  {total > 10 ** 4
                    ? `${
                        Math.floor(total / 100) / 10
                      }t (${total.toLocaleString()}Kg)`
                    : `${total.toLocaleString()}Kg`}
                </h2>

                <div class="flex items-center gap-2 mb-0.5">
                  {/* stars - start */}
                  <div class="flex gap-0.5 -ml-1">
                    {Array(starNumber)
                      .fill("text-yellow-400")
                      .map((color) => {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class={`w-6 h-6 ${color}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        );
                      })}
                    {Array(remainStarNumber)
                      .fill("text-gray-500")
                      .map((color) => {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class={`w-6 h-6 opacity-40 ${color}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        );
                      })}
                  </div>
                  {/* stars - end */}

                  <span class="text-sm font-semibold text-gray-400">
                    {starNumber}/10
                  </span>
                </div>

                <span class="block text-gray-500 text-base">
                  Goal Amount : <a class="font-bold">{goalAmount / 1000}t</a>
                </span>

                <div class="flex flex-col border-t border-b gap-2 py-5 my-5">
                  {/* star - start */}
                  <div class="flex items-center gap-3">
                    <span class="w-10 text-gray-600 text-sm text-right whitespace-nowrap">
                      Sum
                    </span>

                    <div class="h-4 flex flex-1 bg-white overflow-hidden rounded-full">
                      <span
                        class={`w-${progress}/12 h-full bg-yellow-400 rounded-full`}
                      ></span>
                    </div>
                  </div>
                  {/* star - end */}
                </div>
              </div>
              {/* 気が向いたら月ごととかでまとめるとか？ */}

              <img
                src={`https://training-rest.herokuapp.com/media/images/${type}.jpg`}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="w-full h-auto object-cover object-center rounded-full shadow-lg align-bottom mt-64"
              />
            </div>
          </div>
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
  const type = params.type;

  return {
    props: {
      contents,
      type,
    },
    revalidate: 3,
  };
}
