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
    <>
      <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2 flex-column">
        {sunglasses.length === 0 ? (
          <p>No hay anteojos</p>
        ) : (
          sunglasses.map((sunglass) => {
            return (
              <div key={sunglass._id} className="border flex flex-col">
                <div className="bg-gray-200">
                  <Link to={`/purses/${sunglass.slug}`} state={{ sunglass }}>
                    <img
                      src={sunglass.img}
                      alt={sunglass.description}
                      className="w-full object-center object-cover rounded-t-lg shadow-lg lg:h-[300px] lg:w-full lg:max-w-md lg:mx-auto"
                    />
                  </Link>
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900">
                    {sunglass.name}
                  </h3>
                  <p className="text-gray-500 pb-8">{sunglass.description}</p>
                  <Link
                    to={`/sunglasses/${sunglass.slug}`}
                    state={{ sunglass }}
                    className="btn-product"
                  >
                    <button type="button" className="w-full">
                      Ver producto
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
};

export default SunglassList;
