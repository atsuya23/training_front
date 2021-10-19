import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getAllTrainingId() {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-training/`));
  const trainings = await res.json();
  const filteredContents = trainings.sort(
    (a, b) => new (b.id) - new (a.id)
  );
  return filteredContents;
}
