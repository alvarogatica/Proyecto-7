import { useReducer } from "react";
import PurseContext from "./PurseContext";
import PurseReducer from "./PurseReducer";

const PurseState = (props) => {
  const initialState = {
    purses: [
      {
        id: 0,
        name: "Louis Vuitton",
        price: 1000,
      },
      {
        id: 1,
        name: "Miu Miu",
        price: 800,
      }
    ],
  };

  const [globalState, dispatch] = useReducer(PurseReducer, initialState);

  return (
    <PurseContext.Provider
      value={{
        purses: globalState.purses
      }}
    >
        {props.children}
    </PurseContext.Provider>
  );
};

export default PurseState;