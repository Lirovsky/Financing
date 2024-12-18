import { NavLink } from "react-router-dom";
import { cards } from "./consts";

export default function OurServices({ title }) {
  return (
    <div className="border-t-2 border-white bg-white/95">
      <div className="container mx-auto items-center gap-10 py-20">
        <div className="mx-auto w-10/12 md:w-full">
          <div className="mx-auto mb-10 w-full text-center md:w-5/6 lg:w-3/6">
            <h3 className="mb-3 text-3xl font-bold text-blue-700">{title}</h3>
            <p className="text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {cards.map((item) => (
              <div
                key={item.id}
                className="flex h-[350px] flex-col items-center justify-evenly rounded-xl bg-white px-4 text-center md:w-[350px] lg:w-[300px] xl:w-[400px]"
              >
                <div className="text-blue-700">{item.icon}</div>
                <h5 className="text-xl font-medium">{item.title}</h5>
                <p className="text-gray-500">{item.paragraph}</p>
                <NavLink
                  to={item.to}
                  className="rounded-lg border-2 px-7 py-2 font-bold uppercase text-blue-700 duration-500 ease-in-out hover:bg-blue-700 hover:text-white"
                >
                  Read More
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

OurServices.propTypes = {
  title: String,
};
