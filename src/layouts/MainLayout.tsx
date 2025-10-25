import { Bottombar } from "@/components/Bottombar";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router"

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
      <Bottombar />
    </>
  )
}
export default MainLayout;