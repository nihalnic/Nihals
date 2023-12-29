import Footer from "@/components/shared/Footer";
import MenuBar from "@/components/shared/MenuBar";
import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full">
      <NavBar />
      <MenuBar />
      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default RootLayout;
