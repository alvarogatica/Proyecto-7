import { useContext, useEffect } from "react";
import SunglassContext from "../../../contexts/sunglass/SunglassContext";
import { Link } from "react-router-dom";

const SunglassList = () => {
  const ctx = useContext(SunglassContext);
  const { sunglasses, getSunglasses } = ctx;

  useEffect(() => {
    getSunglasses();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      {sunglasses.length === 0 ? (
        <p className="text-gray-500 text-center">No hay anteojos disponibles.</p>
      ) : (
        sunglasses.map((sunglass) => (
          <div
            key={sunglass._id}
            className="border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col"
          >
            <Link to={`/sunglasses/${sunglass.slug}`} state={{ sunglass }}>
              <img
                src={sunglass.img}
                alt={sunglass.description}
                className="w-full object-center object-cover h-80"
              />
            </Link>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{sunglass.name}</h3>
                <p className="text-gray-600 mb-6">{sunglass.description}</p>
              </div>
              <Link
                to={`/sunglasses/${sunglass.slug}`}
                state={{ sunglass }}
                className="btn-product text-center"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default SunglassList;
