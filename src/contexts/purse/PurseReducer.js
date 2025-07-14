const PurseReducer = (globalState, action) => {
  switch (action.type) {
    case "CARGANDO_CARTERAS":
      return {
        ...globalState,
        loading: true,
      };
    case "OBTENER_CARTERAS":
      return {
        ...globalState,
        purses: action.payload,
        loading: false,
      };
    case "OBTENER_CARTERA":
      return {
        ...globalState,
        currentPurse: action.payload,
      };
    default:
      return globalState;
  }
};

export default PurseReducer;
