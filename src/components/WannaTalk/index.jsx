import { NavLink } from "react-router-dom";

export default function WannaTalk() {
  return (
    <div className="bg-filter bg-cover bg-fixed bg-center bg-no-repeat md:px-10">
      <div className="container mx-auto py-20 text-white lg:flex">
        <div className="mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="w-8/12 text-center md:text-left">
            <h4 className="mb-4 text-3xl font-semibold">Wanna Talk To Us?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <NavLink
            to="/contact"
            className="rounded-md border-2 border-transparent bg-white px-7 py-5 font-bold uppercase text-blue-700 duration-500 ease-in-out hover:border-white hover:bg-transparent hover:text-white"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
}
