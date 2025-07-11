import { useContext, useEffect } from "react";
import PurseContext from "../../../contexts/purse/PurseContext";
import { Link } from "react-router-dom";

const PurseList = () => {
  const ctx = useContext(PurseContext);
  const { purses, getPurses } = ctx;

  useEffect(() => {
    getPurses();
  }, []);
  return (
    <>
      <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2 flex-column">
        {purses.length === 0 ? (
          <p>No hay carteras</p>
        ) : (
          purses.map((purse) => {
            return (
              <div key={purse._id} className="border flex flex-col">
                <div className="bg-gray-200">
                  <Link to={`/purses/${purse.slug}`} state={{ purse }}>
                    <img
                      src={purse.img}
                      alt={purse.description}
                      className="w-full object-center object-cover rounded-t-lg shadow-lg lg:h-[300px] lg:w-full lg:max-w-md lg:mx-auto"
                    />
                  </Link>
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900">
                    {purse.name}
                  </h3>
                  <p className="text-gray-500 pb-8">{purse.description}</p>
                  <Link
                    to={`/purses/${purse.slug}`}
                    state={{ purse }}
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

export default PurseList;
