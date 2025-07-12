import { useContext, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

export default function Header() {
  const {
    currentUser,
    cart,
    authStatus,
    verifyUser,
    logoutUser,
    getCart,
    setLoading,
  } = useContext(UserContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    verifyUser();
    getCart();
    setLoading(false);
  }, []);

  useEffect(() => {
    getCart();
  }, [currentUser]);

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotal(totalItems);
  }, [cart]);

  return (
    <header className="bg-green-600">
      <nav className="flex justify-between mx-8 py-4">
        <ul className="flex items-center">
          <li className="hidden ml-10 text-neutral-100 md:block">
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
              <Link to="/" className="btn-nav" onClick={logoutUser}>
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
                    d="M17 16l4-4m0 01-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
              <Link to="/checkout-session" className="btn-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox=" 0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7H19M7 13L5.4 5M19 21a1 1 0 11-2 0 1 1 0 012 0zm-10 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <span className="btn-cart-quantity">{total}</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className="btn-nav">
                Crear Cuenta
              </Link>
              <Link to="/login" className="btn-nav">
                Iniciar Sesion
              </Link>
            </>
          )}
        </section>
      </nav>
    </header>
  );
}
