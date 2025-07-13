import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fdf9f4] text-gray-900 px-4 text-center">
      <CheckCircle size={72} className="text-green-600 mb-6" />
      <h1 className="text-4xl font-bold mb-4">¡Pago exitoso!</h1>
      <p className="text-lg mb-8">
        Tu pago se ha realizado con éxito. ¡Gracias por tu compra!
      </p>
      <Link
        to="/"
        className="btn-product text-lg"
      >
        Volver a la tienda
      </Link>
    </main>
  );
};

export default SuccessPage;
