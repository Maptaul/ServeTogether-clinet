import { Helmet } from "react-helmet-async";
import ActivityGallery from "../Components/ActivityGallery";
import Banner from "../Components/Banner";
import Brighter from "../Components/Brighter";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import VolunteerNeedsNow from "../Components/VolunteerNeedsNow";

const HomeLayout = () => {
  return (
    <div className=" space-y-6 min-h-screen">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="sticky top-0 z-50 bg-[#0F634B] shadow-md">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-6 min-h-screen">
        {/* banner */}
        <section className="rounded-lg">
          <Banner />
        </section>
        <section>
          <VolunteerNeedsNow />
        </section>
        <section>
          <Brighter />
        </section>
        <section>
          <ActivityGallery />
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
