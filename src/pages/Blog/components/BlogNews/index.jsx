import { NavLink } from "react-router-dom";
import { cards } from "./consts";
import Pagination from "./components/Pagination";

export default function BlogNews() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-10 md:px-0">
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
        <div className="flex items-center justify-center gap-1 pt-10">
          <Pagination text="1" style={"bg-blue-700 text-white"} />
          <Pagination text="2" style={"hover:bg-blue-700 hover:text-white"} />
          <Pagination text="3" style={"hover:bg-blue-700 hover:text-white"} />
          <Pagination text="4" style={"hover:bg-blue-700 hover:text-white"} />
          <Pagination text="..." />
          <Pagination text="8" style={"hover:bg-blue-700 hover:text-white"} />
        </div>
      </div>
    </div>
  );
}
