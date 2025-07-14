import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";
import { formatCLP } from "../utils/formatCLP";
import { Trash2 } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { cart, sessionURL, getCheckoutSession, editCart } = userCtx;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (sessionURL) window.location.href = sessionURL;
  }, [sessionURL]);

  useEffect(() => {
    const reduceTotalFromOrder = () => {
      return cart.reduce((acc, cv) => {
        const updatedQuantity = cv.price * cv.quantity;
        return updatedQuantity + acc;
      }, 0);
    };

    setTotal(reduceTotalFromOrder());
  }, [cart]);

  const incrementQuantity = (priceID) => {
    const updatedCart = cart.map((item) =>
      item.priceID === priceID
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    editCart(updatedCart);
  };

  const decrementQuantity = (priceID) => {
    const updatedCart = cart.map((item) =>
      item.priceID === priceID && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    editCart(updatedCart);
  };

  const handleRemove = (e, currentPriceID, productName) => {
    e.preventDefault();
    const confirmed = window.confirm(`¿Seguro que deseas eliminar "${productName}" del carrito?`);
    if (confirmed) {
      const updatedCart = cart.filter((elt) => elt.priceID !== currentPriceID);
      editCart(updatedCart);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCheckoutSession();
  };

  return (
    <div className="max-w-4xl mx-4 py-8 md:mx-auto">
      {/* Botón Volver */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="btn-nav mb-6"
      >
        &larr; Volver
      </button>

      <h1 className="text-3xl font-bold mt-2">Carrito</h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-center text-gray-700">Tu carrito está vacío.</p>
      ) : (
        <form className="mt-12" onSubmit={handleSubmit}>
          <ul>
            {cart.map((e) => (
              <li key={e._id} className="flex py-10 items-center">
                <figure>
                  <img
                    src={e.img}
                    alt={e.name}
                    className="checkout-figure-img"
                  />
                </figure>
                <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="flex justify-between sm:grid-cols-2">
                    <div className="pr-6">
                      <h3 className="text-sm font-semibold">{e.name}</h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900 text-right">
                      {formatCLP(e.price * e.quantity)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decrementQuantity(e.priceID)}
                      className="btn-quantity"
                      aria-label={`Disminuir cantidad de ${e.name}`}
                    >
                      –
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900">
                      {e.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => incrementQuantity(e.priceID)}
                      className="btn-quantity"
                      aria-label={`Aumentar cantidad de ${e.name}`}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      onClick={(evt) => handleRemove(evt, e.priceID, e.name)}
                      className="btn-delete"
                      aria-label={`Eliminar ${e.name} del carrito`}
                    >
                      <Trash2 size={20} />
                      <span>Eliminar</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-gray-100 px-4 py-6 sm:p-6 lg:p-8 mt-10 rounded-md shadow-inner">
            <div>
              <dl className="-my-4 text-sm">
                <div className="py-4 flex items-center justify-between">
                  <dt className="font-bold text-lg">Total</dt>
                  <dd className="text-lg">{formatCLP(total)}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10">
            <button type="submit" className="form-button w-full">
              Procesar Pago
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
