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
    if (res) {
      setErrorMsg(res);
    } else {
      setErrorMsg("");
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center py-8 mx-auto max-w-md">
        <h2 className="text-center text-3xl font-bold mt-8">Iniciar sesión</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Aún no tienes cuenta? &nbsp;
          <Link
            to="/register"
            className="font-medium text-[#d9b8a6] hover:text-[#c2a08e] underline"
          >
            Regístrate aquí
          </Link>
        </p>
      </section>

      <section className="mt-8 px-4 mx-auto w-full max-w-md">
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <div>
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={logUser.email}
              onChange={handleChange}
              className="form-input"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={logUser.password}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div>
            <button type="submit" className="form-button w-full">
              Accede a tu cuenta
            </button>
          </div>

          {errorMsg && (
            <p className="text-center text-red-700 font-medium">{errorMsg}</p>
          )}
        </form>
      </section>
    </>
  );
};

export default Login;
