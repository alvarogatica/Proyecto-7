import React, { useContext, useState } from "react";
import UserContext from "../../contexts/user/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();
  const { registerUser } = ctx;

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.confirmPassword) {
      return setErrorMsg("La confirmación de la contraseña no coincide.");
    }
    const res = await registerUser(newUser);
    if (!res) {
      setErrorMsg("Error al registrar el usuario. Intenta de nuevo.");
      return;
    }
    setErrorMsg("");
    navigate("/login");
  };

  return (
    <>
      <section className="flex flex-col justify-center py-8 mx-auto max-w-md">
        <h2 className="text-center text-3xl font-bold mt-8">Crea tu cuenta</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta? &nbsp;
          <Link
            to="/login"
            className="font-medium text-[#d9b8a6] hover:text-[#c2a08e] underline"
          >
            Inicia sesión
          </Link>
        </p>
      </section>

      <section className="mt-8 px-4 mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate autoComplete="off">
          <div>
            <label htmlFor="username" className="form-label">
              Nombre de usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={newUser.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Tu nombre de usuario"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={newUser.email}
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
              value={newUser.password}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="form-label">
              Confirma tu contraseña
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={newUser.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div>
            <button type="submit" className="form-button w-full">
              Crear cuenta
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

export default Register;
