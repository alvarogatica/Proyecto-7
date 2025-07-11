import { useReducer } from "react";
import axiosClient from "../../config/axios";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    currentUser: {
      username: "",
      email: "",
      country: "",
      address: "",
      zipcode: 0,
      phone: "",
    },
    authStatus: false,
    cart: [],
    sessionURL: null,
    globalLoading: false,
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

  const editCart = async (data) => {
    try {
      const res = await axiosClient.put("/carts/edit-cart", { products: data }, {withCredentials: true});

      await getCart();
      return res.data.msg;
    } catch (error) {
      console.log("Error editing cart", error);
      return
    }
  }

  const getCart = async () => {
    try {
      const res = await axiosClient.get("/carts/get-cart", { withCredentials: true });
      dispatch({
        type: "GET_CART",
        payload: res.data.cart.products,
      })
    } catch (error) { 
      console.log("Error fetching cart", error);
      return;
    }
  }

  const getCheckoutSession = async () => {
    try {
      const res = await axiosClient.get("/carts/create-checkout-session", { withCredentials: true });
      console.log("Respuesta del back: ", res.data)
      dispatch({
        type: "GET_CHECKOUT_SESSION",
        payload: res.data.session_url,
      });
    } catch (error) {
      console.log("Error getcheckoutsession: ", error.response);
      alert("hubo un error: " + error?.response?.status)
      return;
    }
  }

  const setLoading = (status) => {
    dispatch({
      type: "CHANGE_STATUS_LOADING",
      payload: status,
    })
  }

  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        cart: globalState.cart,
        authStatus: globalState.authStatus,
        globalLoading: globalState.globalLoading,
        sessionURL: globalState.sessionURL,
        registerUser,
        loginUser,
        verifyUser,
        logoutUser,
        updateUser,
        editCart,
        getCart,
        getCheckoutSession,
        setLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
