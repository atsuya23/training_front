import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const date = `${yyyy}-${mm}-${dd}`;
  const [selectedTraining, setSelectedTraining] = useState({
    id: 0,
    created_at: "",
    evaluation: "good",
    place: "zym",
    review: "",
  });

  const [selectedContent, setSelectedContent] = useState({
    id: 0,
    id_training: 0,
    training_type: "bench_press",
    weight: 0,
    set1: null,
    set2: null,
    set3: null,
  });

  return (
    <StateContext.Provider
      value={{
        selectedTraining,
        setSelectedTraining,
        selectedContent,
        setSelectedContent,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
