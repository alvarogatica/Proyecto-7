import { useLocation } from "react-router-dom";

const SinglePurse = () => {
  const location = useLocation();
  const { purse } = location?.state;
  return (
    <>
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
        <section>
          <h1 className="text-4xl font-bold">{purse.name}</h1>
          <div className="mt-4">
            <p className="text-gray-500">{purse.description}</p>
          </div>
          <div className="m-4">
            <h1 className="text-3xl">{new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(purse.price)}</h1>
          </div>
        </section>
        <figure className="mt-8 col-start-2 row-span-2">
            <img
            src={purse.img}
            alt={purse.description}
            className="w-full object-center object-cover rounded-lg shadow-lg lg:h-[500px] lg:w-full lg:max-w-md lg:mx-auto"
            />
        </figure>
      </main>
    </>
  );
};

export default SinglePurse;
