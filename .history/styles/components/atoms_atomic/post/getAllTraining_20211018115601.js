import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getAllTraining() {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-training/`));
  const trainings = await res.json();
  const filteredTrainings = trainings.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return filteredTrainings;
}
