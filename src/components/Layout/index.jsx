import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdf9f4] text-gray-900">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
