import { useContext } from "react";
import Cookie from "universal-cookie";
import { useEffect } from "react";
import StateContextProvider from "../styles/components/atoms_atomic/func/StateContext";

import { RESTAPI_URL } from "../Secret";
import Layout from "../styles/components/organisms_atomic/Layout";
import TrainingForm from "../styles/components/atoms_atomic/func/TrainingForm";
import ContentForm from "../styles/components/atoms_atomic/func/ContentForm";

const cookie = new Cookie();

export default function RegisterPage() {
  // useEffect(() => {
  //   mutate();
  // }, []);

  return (
    <Layout>
      <StateContextProvider>
        <TrainingForm />
        <ContentForm />
      </StateContextProvider>
    </Layout>
  );
}
