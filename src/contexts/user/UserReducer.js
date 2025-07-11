const UserReducer = (globalState, action) => {
  switch (action.type) {
    case "Registro_Exitoso":
      return {
        ...globalState,
        mensaje: "Usuario registrado exitosamente",
      };
    case "Login_Exitoso":
      return {
        ...globalState,
        authStatus: true,
      };
    case "GET_USER_DATA":
      return {
        ...globalState,
        authStatus: true,
        currentUser: action.payload,
      };
    case "Logout_Exitoso":
      return {
        ...globalState,
        currentUser: null,
        authStatus: false,
        mensaje: action.payload,
      };
    case "GET_CART":
      return {
        ...globalState,
        cart: action.payload,
      };
    case "GET_CHECKOUT_SESSION":
      return {
        ...globalState,
        sessionURL: action.payload,
      };
    case "CHANGE_STATUS_LOADING":
      return {
        ...globalState,
        globalLoading: action.payload,
      };
    default:
      return globalState;
  }
};
export default UserReducer;
