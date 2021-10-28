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
  return (
    <StateContext.Provider
      value={{
        selectedTraining,
        setSelectedTraining(),
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
