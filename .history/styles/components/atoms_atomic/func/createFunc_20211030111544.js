import { RESTAPI_URL } from "../../../../Secret";

export async function createTraining(e) {
  e.preventDefault();
  await fetch(`${RESTAPI_URL}api/training/`, {
    method: "POST",
    body: JSON.stringify({
      created_at: selectedTraining.created_at,
      place: selectedTraining.place,
      evaluation: selectedTraining.evaluation,
      review: selectedTraining.review,
    }),
    headers: {
      "Content-Type": "application/json",
      // Authorization: `JWT ${cookie.get("access_token")}`,
    },
  }).then((res) => {
    if (res.status === 401) {
      alert("JWT Token not valid");
    }
  });
  setSelectedTraining({
    id: 0,
    created_at: date,
    evaluation: "",
    place: "",
    review: "",
  });
  trainingCreated();
  alert("done");
  history.back();
}

export async function createContent(e) {
  e.preventDefault();
  await fetch(`${RESTAPI_URL}api/content/`, {
    method: "POST",
    body: JSON.stringify({
      id_training: selectedContent.id_training,
      training_type: selectedContent.training_type,
      weight: selectedContent.weight,
      set1: selectedContent.set1,
      set2: selectedContent.set2,
      set3: selectedContent.set3,
    }),

    headers: {
      "Content-Type": "application/json",
      // Authorization: `JWT ${cookie.get("access_token")}`,
    },
  }).then((res) => {
    if (res.status === 401) {
      alert("JWT Token not valid");
    }
  });
  setSelectedContent({
    id_training: 0,
    training_type: "",
    weight: 0,
    set1: 0,
    set2: null,
    set3: null,
  });
  // trainingCreated();
  alert("cotent done");
  history.back();
}
