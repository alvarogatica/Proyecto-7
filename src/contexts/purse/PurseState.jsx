import { useReducer } from "react";
import PurseContext from "./PurseContext";
import PurseReducer from "./PurseReducer";
import axiosClient from "../../config/axios";

const PurseState = (props) => {
  const initialState = {
    purses: [],
    currentPurse: {
      _id: null,
      idProd: "",
      name: "",
      img: "",
      price: "",
      description: "",
      slug: "",
    },
    loading: false,
  };

  const [globalState, dispatch] = useReducer(PurseReducer, initialState);

  const getPurses = async () => {
    try {
      dispatch({ type: "CARGANDO_CARTERAS" });
      const res = await axiosClient.get("/purses");
      dispatch({
        type: "OBTENER_CARTERAS",
        payload: res.data.purses,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "OBTENER_CARTERAS", payload: [] });
    }
  };

  const setCurrentPurse = (purseData) => {
    dispatch({
      type: "OBTENER_CARTERA",
      payload: purseData,
    });
  };

  return (
    <PurseContext.Provider
      value={{
        purses: globalState.purses,
        currentPurse: globalState.currentPurse,
        loading: globalState.loading,
        getPurses,
        setCurrentPurse,
      }}
    >
      {props.children}
    </PurseContext.Provider>
  );
};

export default PurseState;
