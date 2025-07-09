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
        type: "Registro_Existoso",
        payload: res.data,
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const loginUser = async (form) => {
    try {
      const res = await axiosClient.post("/users/login", form);
      const token = res.data.token;

      dispatch({
        type: "Login_Existoso",
        payload: token,
      });
      return;
    } catch (error) {
      console.log(error);
      return error.response.data.msg;
    }
  };

  const logoutUser = async () => {
    dispatch({
      type: "Logout_Usuario",
    });
  };

  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        cart: globalState.cart,
        authStatus: globalState.authStatus,
        registerUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
