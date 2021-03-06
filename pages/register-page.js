import { useContext } from "react";
import Cookie from "universal-cookie";
import { useEffect } from "react";

import { StateContext } from "../styles/components/atoms_atomic/func/StateContext";
import StateContextProvider from "../styles/components/atoms_atomic/func/StateContext";
import { RESTAPI_URL } from "../Secret";
import Layout from "../styles/components/organisms_atomic/Layout";
import TrainingForm from "../styles/components/atoms_atomic/func/TrainingForm";
import ContentForm from "../styles/components/atoms_atomic/func/ContentForm";
import RegisterForm from "../styles/components/atoms_atomic/func/RegisterForm";

const cookie = new Cookie();

export default function RegisterPage() {
  const createContent = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/content/`, {
      method: "POST",
      body: JSON.stringify({
        id_training: selectedContent.id_training,
        training_type: selectedContent.training_type,
        weight: selectedContent.weight,
        set1: selectedContent.set1,
        set2: selectedContent.set2,
        set3: selectedContent.set3,
      }),

      headers: {
        "Content-Type": "application/json",
        // Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedContent({
      id_training: 0,
      training_type: "",
      weight: 0,
      set1: 0,
      set2: null,
      set3: null,
    });
    // trainingCreated();
    alert("cotent done");
    history.back();
  };

  return (
    <Layout
      title="Register Page"
      heading="Regster Training"
      pageEx1="本ページは、行ったトレーニング内容を記録・登録するページとなります。"
      pageEx2="記録内容は、トレーニングを行った状況（場所、日付など）とトレーニング内容（種目、重量など）になります。"
      pageEx3="可能な限り、トレーニングを行ったその日に記録をすることで効率的な振り返りや記録穴が生じることを防ぎます。"
    >
      <StateContextProvider>
        <RegisterForm />
      </StateContextProvider>

      <p class="text-gray-400 text-xs">
        By signing up to our newsletter you agree to our{" "}
        <a
          href="#"
          class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
        >
          Privacy Policy
        </a>
        .
      </p>
    </Layout>
  );
}
