import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <Outlet />
    </div>
  );
}
