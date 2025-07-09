const UserReducer = (globalState, action) => {
  switch (action.type) {
    case "Registro_exitoso":
      return {
        ...globalState,
        mensaje: "Usuario registrado exitosamente",
      };
    default:
      return globalState;
  }
};
export default UserReducer;