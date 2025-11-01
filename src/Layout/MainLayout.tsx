import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* nơi hiển thị nội dung page */}
      </main>
    </>
  );
}