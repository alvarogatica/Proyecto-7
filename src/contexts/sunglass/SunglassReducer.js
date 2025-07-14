const SunglassReducer = (globalState, action) => {
  switch (action.type) {
    case "CARGANDO_ANTEOJOS":
      return {
        ...globalState,
        loading: true,
      };
    case "OBTENER_ANTEOJOS":
      return {
        ...globalState,
        sunglasses: action.payload,
        loading: false,
      };
    case "OBTENER_ANTEOJO":
      return {
        ...globalState,
        currentSunglass: action.payload,
      };
    default:
      return globalState;
  }
};

export default SunglassReducer;
