import { useContext } from "react";
import { StateContext } from "../styles/components/atoms_atomic/func/StateContext";
import Cookie from "universal-cookie";
import { useEffect } from "react";

import { RESTAPI_URL } from "../Secret";
import Layout from "../styles/components/organisms_atomic/Layout";
import TrainingForm from "../styles/components/atoms_atomic/func/TrainingForm";
import { mutate } from "swr";

const cookie = new Cookie();

export default function RegisterPage() {
  useEffect(() => {
    mutate();
  }, []);

  
  
  return (
    <Layout>
      <TrainingForm trainingCreated={mutate} />
    </Layout>
  );
}
