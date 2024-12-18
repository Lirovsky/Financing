import MakePaymentImg from "../../../../img/makepayment.jpg";
import { options } from "./consts";

export default function MakePayment() {
  return (
    <div className="bg-white md:px-10">
      <div className="container mx-auto items-center gap-10 py-20 lg:flex">
        <div>
          <img
            src={MakePaymentImg}
            alt="Imagem de uma familia guardando dinheiro em um cofrinho"
            className="mx-auto w-10/12 rounded-xl md:w-full"
          />
        </div>
        <div className="mx-auto mt-10 w-10/12 md:w-full lg:w-8/12 xl:w-6/12">
          <h3 className="text-3xl font-semibold">
            Make payment fast and smooth.
          </h3>
          <p className="my-2 text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          {options.map((item) => {
            return (
              <div key={item.id} className="flex gap-3 pt-5">
                <div className="mt-1 text-blue-700">{item.icon}</div>
                <div>
                  <h4 className="mb-2 text-xl font-medium">{item.title}</h4>
                  <p className="text-md text-gray-500">{item.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
