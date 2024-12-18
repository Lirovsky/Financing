import { NavLink } from "react-router-dom";
import { links1, links2, links3, links4, links5 } from "./const";

export default function Footer() {
  return (
    <div className="px-20 text-white md:pt-20">
      <div className="container mx-auto py-20 md:py-5 lg:flex">
        <div className="mx-auto flex flex-col justify-between gap-14 md:flex-row">
          <div className="w-full md:w-2/6">
            <h3 className="pb-3 text-lg font-semibold">ABOUT</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <address className="pb-3 pt-5">
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            </address>
            <ul className="text-gray-300">
              {links1.map((item) => (
                <li key={item.id} className="mb-2">
                  <a href="#" className="hover:text-white">
                    {item.contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-3 text-lg font-semibold">COMPANY</h3>
            <div className="flex gap-10 text-gray-300">
              <ul>
                {links2.map((item) => (
                  <li key={item.id} className="mb-2">
                    <NavLink to={item.to} className="hover:text-white">
                      {item.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul>
                {links3.map((item) => (
                  <li key={item.id} className="mb-2">
                    <NavLink to={item.to} className="hover:text-white">
                      {item.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-lg font-semibold">NAVIGATION</h3>
            <ul className="text-gray-300">
              {links4.map((item) => (
                <li key={item.id} className="mb-2">
                  <NavLink to={item.to} className="hover:text-white">
                    {item.link}
                  </NavLink>
                </li>
              ))}
            </ul>
            <h3 className="pt-10 text-lg font-semibold">SOCIAL</h3>
            <ul className="flex w-4/6 flex-wrap gap-3 pt-3 lg:w-full">
              {links5.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.to}>
                    <div className="text-2xl">{item.icon}</div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-20 text-center">
        <p>
          Copyright ©2024. All Rights Reserved. — Designed with love by{" "}
          <a
            href="https://untree.co"
            className="text-gray-300 hover:text-white"
          >
            Untree.co
          </a>
        </p>
      </div>
    </div>
  );
}
