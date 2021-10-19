import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getTrainingDate(id) {
  const res = await fetch(new URL(`${RESTAPI_URL}api/detail-training/${id}`));
  const training = await res.json();
  return training.map((training) => {
    return {
      training,
    };
  });
}
