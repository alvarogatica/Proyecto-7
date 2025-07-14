import { useContext, useEffect } from "react";
import PurseContext from "../../../contexts/purse/PurseContext";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const PurseList = () => {
  const { purses, getPurses, loading } = useContext(PurseContext);

  useEffect(() => {
    getPurses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <svg
          className="animate-spin h-10 w-10 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      {purses.length === 0 ? (
        <p className="text-center text-gray-500">
          No tenemos carteras disponibles por ahora, ¡vuelve pronto!
        </p>
      ) : (
        purses.map((purse) => (
          <div
            key={purse._id}
            className="border rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col transition-transform duration-300 hover:shadow-md hover:scale-105"
          >
            <Link to={`/purses/${purse.slug}`} state={{ purse }}>
              <img
                src={purse.img}
                alt={purse.description}
                className="w-full object-center object-cover h-80"
              />
            </Link>
            <div className="flex-1 p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-900">{purse.name}</h3>
              <p className="text-gray-500 text-sm flex-1">{purse.description}</p>
              <Link
                to={`/purses/${purse.slug}`}
                state={{ purse }}
                className="btn-product self-start"
              >
                <ShoppingBag size={18} />
                Ver cartera
              </Link>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default PurseList;
