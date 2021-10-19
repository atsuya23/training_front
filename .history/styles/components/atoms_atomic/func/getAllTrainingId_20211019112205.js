import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getAllTrainingId() {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-training/`));
  const trainings = await res.json();
  return trainings.map((training) => {
    return {
      params: {
        id; String(training.id)
      }
    }
  })
}
