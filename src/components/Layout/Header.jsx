import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { authStatus, verifyUser, logoutUser } = userCtx;

  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <header className="bg-green-600">
      <nav className="flex justify-between mx-8 py-4">
        <ul className="flex items-center">
          <li className="hidden ml-10 text-neutral-50 md:block">
            <Link to="/" className="font-medium">
              urdupes.cl
            </Link>
          </li>
        </ul>
        <section className="flex items-center justify-end">
          {authStatus ? (
            <>
              <Link to="/perfil" className="btn-nav">
                Perfil
              </Link>

              <Link
                to="/"
                className="btn-nav"
                onClick={() => logoutUser(navigate)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className="btn-nav">
                Crear cuenta
              </Link>
              <Link to="/login" className="btn-nav">
                Iniciar sesión
              </Link>
            </>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;
