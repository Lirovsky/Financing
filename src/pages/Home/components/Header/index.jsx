import { NavLink } from "react-router-dom";
import HeaderImg from "../../../../img/header.jpg";

export default function Header() {
  return (
    <div className="container mx-auto items-center gap-10 py-20 text-white md:flex md:px-10">
      <div className="mx-auto w-10/12 text-center md:w-full md:text-left lg:w-8/12">
        <h2 className="text-3xl font-bold lg:text-5xl">
          Smart banking for financial freedom.
        </h2>
        <p className="text-md my-5 xl:w-10/12">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="my-14 md:my-10">
          <NavLink
            to="/contact"
            className="rounded-md border-2 border-transparent bg-white px-7 py-5 font-bold uppercase text-blue-700 duration-500 ease-in-out hover:border-white hover:bg-transparent hover:text-white"
          >
            Contact us
          </NavLink>
        </div>
      </div>
      <div>
        <img
          src={HeaderImg}
          alt="Imagem de empresário calculando dinheiro"
          className="mx-auto w-10/12 rounded-xl md:w-full"
        />
      </div>
    </div>
  );
}
