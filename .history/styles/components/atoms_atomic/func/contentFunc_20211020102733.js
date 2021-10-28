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

export async function getContentIdsByTrainingId(trainingId) {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-content/`));
  const contents = await res.json();
  return contents.map((content) => {
    const contentByTrainigId = (content.training_id == trainingId && content)
    return {
      params: {
        ids: String(contentByTrainigId.id),
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
