import { NavLink } from "react-router-dom";
import { cards } from "./consts";

export default function Latest() {
  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-10 md:px-0">
        <div className="py-14 text-center">
          <h3 className="text-3xl font-bold text-blue-700">Latest News</h3>
        </div>
        <div className="gap-5 md:flex md:flex-wrap md:justify-center">
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                className="mb-5 rounded-lg border bg-white md:w-[45%] lg:w-[30%]"
              >
                <div>
                  <img
                    src={item.image}
                    className="h-60 w-full rounded-t-lg object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-5">
                  <p className="text-gray-500">{item.date}</p>
                  <h1 className="py-4 text-xl font-medium">{item.title}</h1>
                  <p className="pb-4 text-base text-gray-500">
                    {item.paragraph}
                  </p>
                  <NavLink
                    to={item.to}
                    key={item.id}
                    className="text-blue-600 hover:underline"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
