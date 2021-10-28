import { useContext } from "react";
import { StateContext } from "./StateContext";
import { Cookie } from "universal-cookie";

import { RESTAPI_URL } from "../../../../Secret";

const cookie = new Cookie();

export default function TrainingForm({ taskCreated }) {
  const { selectedTask, setSelectedTask } = useContext(StateContext);
}
const create = async (e) => {
  e.preventDefault();
  await fetch(`${RESTAPI_URL}api/training/`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${cookie.get("access_token")}`,
    },
  });
};
