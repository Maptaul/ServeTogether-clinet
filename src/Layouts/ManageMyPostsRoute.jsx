import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";
import MyVolunteerNeedPost from "../Components/MyVolunteerNeedPost";
import MyVolunteerRequestPost from "../Components/MyVolunteerRequestPost";
import Navbar from "../Components/Navbar";

const ManageMyPostsRoute = () => {
  return (
    <div className="space-y-6 flex flex-col min-h-screen ">
      <Helmet>
        <title>Manage My Posts</title>
      </Helmet>
      <header className="sticky top-0 z-50 bg-[#0F634B] shadow-md">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-6 min-h-screen">
        <section>
          <MyVolunteerNeedPost />
        </section>
        <section>
          <MyVolunteerRequestPost />
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ManageMyPostsRoute;
