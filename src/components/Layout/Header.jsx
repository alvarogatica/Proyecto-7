import { Link } from "react-router-dom";

const Header = () => {
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
          <>
            <Link to="/register" className="btn-nav">
              Crear cuenta
            </Link>
            <Link to="/login" className="btn-nav">
              Iniciar sesión
            </Link>
          </>
        </section>
      </nav>
    </header>
  );
};

export default Header;
