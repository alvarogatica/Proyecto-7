import { Link } from "react-router-dom";
import { ShoppingBag, Glasses } from "lucide-react";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#fdf9f4]">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          urdupes.cl
        </h1>
        <p className="text-lg text-gray-600 mb-12 font-light">
          Tu tienda de accesorios femeninos favorita inspirados en la elegancia minimalista para tus looks del día a día
        </p>
        <section className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <Link to="/purses" className="btn-product flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md">
            <ShoppingBag size={20} />
            Ver carteras
          </Link>
          <Link to="/sunglasses" className="btn-product flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md">
            <Glasses size={20} />
            Ver anteojos
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
