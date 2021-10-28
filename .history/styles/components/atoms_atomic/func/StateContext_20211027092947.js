import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
  const [selectedTraining, setSelectedTraining] = useState({
    id: 0,
    created_at: "",
  });
  return (
    <StateContext.Provider
      value={{
        selectedTraining,
        setSelectedTraining,
      }}
    >
      {props.childeren}
    </StateContext.Provider>
  );
}
