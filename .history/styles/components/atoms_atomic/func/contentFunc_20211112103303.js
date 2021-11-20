import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getAllContent() {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-content/`));
  const contents = await res.json();
  const filteredContents = contents.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );
  return filteredContents;
}

export async function getAllContentId() {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-content/`));
  const contents = await res.json();
  return contents.map((content) => {
    return {
      params: {
        id: String(content.id),
      },
    };
  });
}

export async function getContentDate(id) {
  const res = await fetch(new URL(`${RESTAPI_URL}api/detail-content/${id}`));
  const content = await res.json();
  return {
    content,
  };
}

export async function getContentByTrainingId(trainingId) {
  const res = await fetch(
    new URL(`${RESTAPI_URL}api/content/?training_id=${trainingId}/`)
  );
  const contents = await res.json();
  const filteredContents = contents.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );
  return filteredContents;
}

export async function getContentDateByTrainingId(trainingId) {
  const res = await fetch(
    new URL(`${RESTAPI_URL}api/content/?training_id=${trainingId}/`)
  );
  const contents = await res.json();
  return contents.map((content) => {
    return {
      params: {
        id: String(content.id),
        training_type: String(content.training_type),
        weight: String(content.weight),
        set1: String(content.set1),
        // set2: String(content.set2),
        // set3: String(content.set3)
      },
    };
  });
}
