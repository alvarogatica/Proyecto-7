import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";
import { LogOut, ShoppingCart } from "lucide-react";

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
    <header className="bg-[#fdf9f4] shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
        <ul className="flex items-center">
          <li className="hidden md:block">
            <Link to="/" className="text-gray-900 font-semibold text-2xl">
              urdupes.cl
            </Link>
          </li>
        </ul>
        <section className="flex items-center justify-end gap-4">
          {authStatus ? (
            <>
              <Link to="/perfil" className="btn-nav">
                Perfil
              </Link>
              <button
                onClick={logoutUser}
                aria-label="Cerrar sesión"
                className="btn-nav flex items-center gap-1"
              >
                <LogOut size={18} />
                Salir
              </button>
              <Link to="/checkout-session" className="btn-cart relative flex items-center">
                <ShoppingCart size={22} className="text-gray-700 hover:text-gray-900 transition-colors" />
                <span className="btn-cart-quantity absolute -top-2 -right-2 bg-[#d9b8a6] text-gray-900 rounded-full px-1.5 text-xs font-semibold">
                  {total}
                </span>
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
        </section>
      </nav>
    </header>
  );
}
