import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="space-y-6 flex flex-col min-h-screen ">
      <Helmet>
        <title>All Volunteer</title>
      </Helmet>
      <header className="sticky top-0 z-50 bg-[#0F634B] shadow-md">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-6 min-h-screen">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
