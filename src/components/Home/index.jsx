import { Link } from "react-router-dom";
import { ShoppingBag, Glasses } from "lucide-react";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#fdf9f4] overflow-x-hidden">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-gray-900">
          urdupes.cl
        </h1>
        <p className="text-lg text-gray-600 mb-12 font-light">
          Tu tienda online de accesorios femeninos favorita, inspirados en la elegancia
          minimalista para tus looks del día a día.
        </p>
        <section className="flex flex-col gap-8 w-full max-w-md mx-auto">
          <Link
            to="/purses"
            className="btn-product flex items-center justify-center gap-3 px-8 py-5 text-lg transition-transform duration-300 ease-in-out lg:hover:scale-110 lg:hover:shadow-lg"
          >
            <ShoppingBag size={28} />
            Ver carteras
          </Link>
          <Link
            to="/sunglasses"
            className="btn-product flex items-center justify-center gap-3 px-8 py-5 text-lg transition-transform duration-300 ease-in-out lg:hover:scale-110 lg:hover:shadow-lg"
          >
            <Glasses size={28} />
            Ver anteojos
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
