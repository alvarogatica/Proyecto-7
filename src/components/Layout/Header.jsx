import { useContext, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Glasses, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="bg-[#fdf9f4]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl text-gray-900">
              urdupes.cl
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/purses"
              className="btn-nav inline-flex items-center gap-1"
              aria-label="Ver carteras"
            >
              <ShoppingBag size={16} /> Carteras
            </Link>
            <Link
              to="/sunglasses"
              className="btn-nav inline-flex items-center gap-1"
              aria-label="Ver anteojos"
            >
              <Glasses size={16} /> Anteojos
            </Link>

            {authStatus ? (
              <>
                <Link to="/perfil" className="btn-nav">
                  Perfil
                </Link>
                <button
                  onClick={logoutUser}
                  className="btn-nav flex items-center"
                  aria-label="Cerrar sesión"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
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
                  Salir
                </button>
                <Link to="/checkout-session" className="btn-cart relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
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
                  Iniciar Sesión
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className="p-2 rounded-md text-gray-900 hover:bg-[#d4a798] transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-gray-300">
            <Link
              to="/purses"
              className="btn-nav inline-flex items-center gap-2 w-full justify-center"
              aria-label="Ver carteras"
              onClick={() => setMenuOpen(false)}
            >
              <ShoppingBag size={18} /> Carteras
            </Link>
            <Link
              to="/sunglasses"
              className="btn-nav inline-flex items-center gap-2 w-full justify-center"
              aria-label="Ver anteojos"
              onClick={() => setMenuOpen(false)}
            >
              <Glasses size={18} /> Anteojos
            </Link>

            {authStatus ? (
              <>
                <Link
                  to="/perfil"
                  className="btn-nav w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Perfil
                </Link>
                <button
                  onClick={() => {
                    logoutUser();
                    setMenuOpen(false);
                  }}
                  className="btn-nav w-full flex justify-center items-center gap-1"
                  aria-label="Cerrar sesión"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  Salir
                </button>
                <Link
                  to="/checkout-session"
                  className="btn-cart relative justify-center w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7H19M7 13L5.4 5M19 21a1 1 0 11-2 0 1 1 0 012 0zm-10 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  <span className="btn-cart-quantity">{total}</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="btn-nav w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Crear Cuenta
                </Link>
                <Link
                  to="/login"
                  className="btn-nav w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
