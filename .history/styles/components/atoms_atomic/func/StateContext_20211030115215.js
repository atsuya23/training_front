import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
  const [selectedTraining, setSelectedTraining] = useState({
    id: 0,
    created_at: "",
    evaluation: "",
    place: "",
    review: "",
  });

  const [selectedContent, setSelectedContent] = useState({
    id: 0,
    id_training: 0,
    training_type: "",
    weight: 0,
    set1: 0,
    set2: null,
    set3: null,
  });
  
  return (
    <StateContext.Provider
      value={{
        selectedTraining,
        setSelectedTraining,
        selectedContent,
        setSelectedContent
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
