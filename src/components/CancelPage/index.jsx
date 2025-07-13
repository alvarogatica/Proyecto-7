import React from "react";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fdf9f4] text-gray-900 px-4 text-center">
      <XCircle size={72} className="text-red-600 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Pago cancelado</h1>
      <p className="text-lg mb-8">
        Tu pago ha sido cancelado. Si tienes alguna pregunta, por favor contáctanos.
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

export default CancelPage;
