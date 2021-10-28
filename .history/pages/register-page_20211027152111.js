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

  const { selectedTraining, setSelectedTraining } = useContext(StateContext);

  const create = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/training/`, {
      method: "POST",
      body: JSON.stringify({ created_at: selectedTraining.created_at }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedTask({ id: 0, created_at: "" });
    trainingCreated();
  };

  const update = async (e) => {
    e.preventDefault();
    await fetch(`${RESTAPI_URL}api/training/${selectedTraining.id}`, {
      method: "PUT",
      body: JSON.stringify({ created_at: selectedTraining.created_at }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT Token not valid");
      }
    });
    setSelectedTask({ id: 0, created_at: "" });
    trainingCreated();
  };
  return (
    <Layout>
      <TrainingForm trainingCreated={mutate} />
    </Layout>
  );
}
