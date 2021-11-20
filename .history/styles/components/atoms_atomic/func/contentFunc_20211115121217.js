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
    new URL(`${RESTAPI_URL}api/content/?id_training=${trainingId}`)
  );
  const contents = await res.json();
  const filteredContents = await contents.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );
  return filteredContents;
}

export async function getContentIdsByTrainingId(trainingId) {
  const res = await fetch(
    new URL(`${RESTAPI_URL}api/content/?training_id=${trainingId}`)
  );
  const contents = await res.json();
  return contents.map((content) => {
    return {
      params: {
        id: String(content.id),
      },
    };
  });
}

export async function getContentByType(trainingType) {
  const res = await fetch(
    new URL(`${RESTAPI_URL}api/content/?training_type=${trainingType}`)
  );
  const contents = await res.json();
  const filteredContents = await contents.sort(
    (a, b) => new Date(b.id) - new Date(a.id)
  );
  return filteredContents;
}

export async function getAllContentType() {
  const res = await fetch(
    new URL("http://127.0.0.1:8000/api/trainingType")
  );
  const types = await res.json();
  return types.map((type) => {
    return {
      params: {
        "type": String(type.type),
      },
    };
  });
}

