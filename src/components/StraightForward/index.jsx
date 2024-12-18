import { options } from "./consts";
import StraightForwardImg from "../../img/straightforward.jpg";

export default function StraightForward() {
  return (
    <div className="bg-white md:px-10">
      <div className="container mx-auto items-center gap-10 py-20 lg:flex">
        <div>
          <img
            src={StraightForwardImg}
            alt="Imagem de uma mulher usando um notebook"
            className="mx-auto w-10/12 rounded-xl md:w-full"
          />
        </div>
        <div className="order-first mx-auto mt-10 w-10/12 md:w-full lg:my-10 lg:w-8/12 xl:w-6/12">
          <h3 className="text-3xl font-semibold">
            Straight-forward way of financing
          </h3>
          {options.map((item) => {
            return (
              <div key={item.id} className="flex gap-5 pt-5">
                <div className="mt-1 text-blue-700">{item.icon}</div>
                <div>
                  <h4 className="mb-2 text-xl font-medium">{item.title}</h4>
                  <p className="text-gray-500">{item.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
