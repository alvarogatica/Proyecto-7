import { useReducer } from "react";
import PurseContext from "./PurseContext";
import PurseReducer from "./PurseReducer";
import axiosClient from "../../config/axios";

const PurseState = (props) => {
  const initialState = {
    purses: [],
  };

  const [globalState, dispatch] = useReducer(PurseReducer, initialState);

  const getPurses = async () => {
    try {
      const res = await axiosClient.get("/purses");
      console.log(res);
      dispatch({
        type: "Obtener_Carteras",
        payload: res.data.purses,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PurseContext.Provider
      value={{
        purses: globalState.purses,
        getPurses
      }}
    >
      {props.children}
    </PurseContext.Provider>
  );
};

export default PurseState;
