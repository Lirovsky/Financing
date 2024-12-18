import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="bg-img h-full bg-blue-700 bg-cover bg-top bg-no-repeat">
      <Navbar />
      <Outlet />
    </div>
  );
}
