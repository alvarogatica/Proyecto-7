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
  };

  const [globalState, dispatch] = useReducer(SunglassReducer, initialState);

  const getSunglasses = async () => {
    try {
      const res = await axiosClient.get("/sunglasses");
      dispatch({
        type: "Obtener_Anteojos",
        payload: res.data.sunglasses,
      });
    } catch (error) {
      console.log(error);
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
        getSunglasses,
        setCurrentSunglass,
      }}
    >
      {props.children}
    </SunglassContext.Provider>
  );
};

export default SunglassState;
