import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="min-h-screen ">
      <header className="sticky top-0 z-50 bg-[#0F634B] shadow-md">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-6 min-h-screen">
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
