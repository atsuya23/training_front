import { useContext } from "react";
import { StateContext } from "./StateContext";
import { Cookie } from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";

const cookie = new Cookie();

export default function TrainingForm({ trainingCreated }) {
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
    <div>
      <form onSubmit={selectedTraining.id !== 0 ? update : create}>
        <input
          className="text-black mb-8 px-2 py-1"
          type="text"
          value={selectedTraining.created_at}
          onChange={(e) =>
            setSelectedTraining({
              ...selectedTraining,
              created_at: e.target.value,
            })
          }
        />
      </form>
    </div>
  );
}
