import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="pad-x-80">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}