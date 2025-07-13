import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCLP } from "../../utils/formatCLP";
import SunglassContext from "../../../contexts/sunglass/SunglassContext";
import UserContext from "../../../contexts/user/UserContext";
import { useContext, useEffect, useState } from "react";

const SingleSunglass = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { sunglass } = location?.state;

  const userCtx = useContext(UserContext);
  const { authStatus, cart, editCart, getCart } = userCtx;
  const { setCurrentSunglass } = useContext(SunglassContext);

  useEffect(() => {
    if (!sunglass) {
      navigate("/sunglasses");
      return;
    }
    setCurrentSunglass(sunglass);
    getCart();
  }, []);

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (quantity === 0) return;
    const item = {
      priceID: sunglass.priceID,
      name: sunglass.name,
      quantity,
      price: sunglass.price,
      img: sunglass.img,
      slug: sunglass.slug,
    };

    const existingItemIndex = cart.findIndex(
      (el) => el.priceID === item.priceID
    );

    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cart.map((el, i) =>
        i === existingItemIndex ? { ...el, quantity: item.quantity } : el
      );
    } else {
      updatedCart = [...cart, item];
    }
    await editCart(updatedCart);
  };

  if (!sunglass) return null;
  const { name, description, img, price } = sunglass;
  const quantityOptions = [0, 1, 2, 3, 4, 5];

  return (
    <main className="max-w-5xl mx-auto pt-16 pb-24 px-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="btn-nav mb-6"
      >
        &larr; Volver
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        <section>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-gray-600 mt-4">{description}</p>
          <p className="mt-4  text-xl font-semibold">
            Precio: {formatCLP(price)}
          </p>
          {authStatus && (
            <form onSubmit={handleSubmit} className="mt-8">
              <label className="block mb-2 font-medium text-gray-700">
                Cantidad
              </label>
              <select
                className="w-32 border border-gray-300 rounded-md p-2"
                value={quantity}
                onChange={handleChange}
              >
                {quantityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="btn-product mt-6"
                disabled={quantity === 0}
              >
                {cart.length ? "Modificar carrito" : "Agregar al carrito"}
              </button>
            </form>
          )}

          {!authStatus && (
            <Link to="/login">
              <button className="btn-product mt-6">
                Registrate para comprar
              </button>
            </Link>
          )}
        </section>

        <figure>
          <img
            src={img}
            alt={description}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </figure>
      </div>
    </main>
  );
};

export default SingleSunglass;
