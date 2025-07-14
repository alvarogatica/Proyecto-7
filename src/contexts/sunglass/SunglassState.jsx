import { useReducer } from "react";
import SunglassContext from "./SunglassContext";
import SunglassReducer from "./SunglassReducer";
import axiosClient from "../../config/axios";

const SunglassState = (props) => {
  const initialState = {
    sunglasses: [],
    currentSunglass: {
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

  const [globalState, dispatch] = useReducer(SunglassReducer, initialState);

  const getSunglasses = async () => {
    try {
      dispatch({ type: "CARGANDO_ANTEOJOS" });
      const res = await axiosClient.get("/sunglasses");
      dispatch({
        type: "OBTENER_ANTEOJOS",
        payload: res.data.sunglasses,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "OBTENER_ANTEOJOS", payload: [] });
    }
  };

  const setCurrentSunglass = (sunglassData) => {
    dispatch({
      type: "OBTENER_ANTEOJO",
      payload: sunglassData,
    });
  };

  return (
    <SunglassContext.Provider
      value={{
        sunglasses: globalState.sunglasses,
        currentSunglass: globalState.currentSunglass,
        loading: globalState.loading,
        getSunglasses,
        setCurrentSunglass,
      }}
    >
      {props.children}
    </SunglassContext.Provider>
  );
};

export default SunglassState;
