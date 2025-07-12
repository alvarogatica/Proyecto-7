import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdf9f4] text-gray-600 text-sm text-center px-4 pt-12 pb-8 flex flex-col items-center gap-6">
      <div className="max-w-5xl mx-auto w-full">
        <div>
          <button
            aria-label="Instagram"
            className="inline-flex items-center justify-center p-2 rounded-full bg-[#d9b8a6] text-gray-900 transition-transform duration-300 ease-in-out hover:bg-[#d4a798] hover:scale-110"
            onClick={() => window.open('https://www.instagram.com/urdupes.cl/', '_blank')}
          >
            <Instagram size={20} />
          </button>
        </div>
        <p>&copy; 2025</p>
        <p>Tienda electrónica de accesorios femeninos</p>
      </div>
    </footer>
  );
};

export default Footer;
