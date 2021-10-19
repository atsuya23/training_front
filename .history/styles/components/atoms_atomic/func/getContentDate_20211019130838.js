import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getContentDate(id) {
  const res = await fetch(new URL(`${RESTAPI_URL}api/list-content/`));
  const content = await res.json();
  return {
    content,
  };
}
