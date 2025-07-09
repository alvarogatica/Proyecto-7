import React, { useContext, useState } from "react";
import UserContext from "../../contexts/user/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
  const ctx = useContext(UserContext);
  const { loginUser } = ctx;

  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(logUser);
    if (res) setErrorMsg(res);
    return;
  };
  return (
    <>
      <section className="flex flex-col justify-center py-8 mx-auto">
        <h2 className="text-center text-3xl font-bold mt-8">Iniciar sesion</h2>
        <p className="mt-2 text-center text-sm">
          ¿Aun no tienes cuenta? &nbsp;
          <Link
            to="/register"
            className="font-medium text-brand-light-purple underline"
          >
            Regístrate
          </Link>
        </p>
      </section>
      <section className="mt-8 px-4 mx-auto w-full max-w-md">
        <div>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  name="email"
                  type="email"
                  className="form-input"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  name="password"
                  type="password"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="form-button">
                Accede a tu cuenta
              </button>
            </div>
            <div>
              <p className="text-center text-red-800">{errorMsg}</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
