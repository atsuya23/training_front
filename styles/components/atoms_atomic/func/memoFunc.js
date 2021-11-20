import fetch from "node-fetch";

import { RESTAPI_URL } from "../../../../Secret";

export async function getAllMemo() {
  const res = await fetch(new URL(`${RESTAPI_URL}memo/memo/`));
  const memos = await res.json();
  const filteredMemos = memos.sort((a, b) => new Date(b.id) - new Date(a.id));
  return filteredMemos;
}
