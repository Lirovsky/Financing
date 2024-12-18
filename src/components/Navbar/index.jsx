import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark, FaPhone } from "react-icons/fa6";

export default function Navbar() {
  // Visivel ou não
  const [menu, setMenu] = useState(false);

  // Trocar a visibilidade
  const handleNav = () => {
    setMenu(!menu);
  };

  const navItems = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "Blog", to: "/blog" },
    { id: 3, title: "Services", to: "/services" },
    { id: 4, title: "About", to: "/about" },
    { id: 5, title: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="mx-auto flex h-28 items-center justify-between px-4 text-white lg:container">
      {/* Desktop */}
      <h1 className="text-3xl font-bold">Financing.</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <NavLink
            to={item.to}
            key={item.id}
            className="px-2 py-3 text-lg text-white/70 hover:text-white"
          >
            {item.title}
          </NavLink>
        ))}
      </ul>

      <div className="hidden items-center gap-x-2 md:flex">
        <FaPhone className="h-12 w-12 rounded-full bg-blue-500 p-3" />
        <p className="text-lg">123-489-9381</p>
      </div>

      {/* Mobile */}
      <div onClick={handleNav} className="block md:hidden">
        {menu ? <FaXmark size={40} /> : <FaBars size={40} />}
      </div>

      <ul
        className={
          menu
            ? "bg-img fixed left-0 top-0 flex h-full w-7/12 flex-col border-r border-r-gray-100 bg-blue-700 bg-cover bg-left bg-no-repeat duration-500 ease-in-out md:hidden"
            : "fixed -left-full bottom-0 top-0 flex w-7/12 flex-col duration-500 ease-in-out"
        }
      >
        <h1 className="mb-5 ms-4 mt-10 text-3xl font-bold">Financing.</h1>

        {navItems.map((item) => (
          <NavLink
            onClick={handleNav}
            to={item.to}
            key={item.id}
            className="ms-3 px-2 py-3 text-2xl text-white/70 hover:text-white"
          >
            {item.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
