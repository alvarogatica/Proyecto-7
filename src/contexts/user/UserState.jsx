import { useReducer } from "react";
import UserContext from "./UserContext";
import axiosClient from "../../config/axios";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    currentUser: {
      username: "",
      email: "",
      country: "",
      address: "",
      zipcode: 0,
    },
    cart: [],
    authStatus: false,
  };

  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  const registerUser = async (form) => {
    try {
      const res = await axiosClient.post("/users/create", form);
      console.log(res);
      dispatch({
        type: "Registro_Exitoso",
        payload: res.data,
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const updateUser = async (formData) => {
    await axiosClient.put("/users/update", formData, {
      withCredentials: true,
  })
}

  const loginUser = async (form) => {
    try {
      const res = await axiosClient.post("/users/login", form, {
        withCredentials: true,
      });
      console.log(res);
      dispatch({
        type: "Login_Exitoso",
      });
      return;
    } catch (error) {
      return error.response.data.msg;
    }
  };

  const verifyUser = async () => {
    try {
      const res = await axiosClient.get("/users/verify-user", {
        withCredentials: true,
      });
      console.log(res);
      const userData = res.data.user;
      dispatch({
        type: "GET_USER_DATA",
        payload: userData,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const logoutUser = async (navigate) => {
    try {
      await axiosClient.post("/users/logout", {}, { withCredentials: true });
      dispatch({
        type: "Logout_Exitoso",
        payload: "Sesion cerrada exitosamente",
      });
      navigate("login");
    } catch (error) {
      console.log("Error cerrando sesion", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        cart: globalState.cart,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        verifyUser,
        logoutUser,
        updateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
