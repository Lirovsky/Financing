import { cards } from "./consts";

export default function OurTeam() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-10 md:px-0">
        <div className="mx-auto mb-20 w-full text-center md:w-5/6 lg:w-3/6">
          <h3 className="mb-3 text-3xl font-bold text-blue-700">Our Team</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="gap-5 md:flex md:flex-wrap md:justify-center">
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                className="mb-5 flex flex-col items-center justify-center rounded-lg bg-white text-center md:w-[45%] lg:w-[30%]"
              >
                <div>
                  <img
                    src={item.image}
                    className="w-40 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-5">
                  <h1 className="py-4 text-xl font-medium">{item.name}</h1>
                  <p className="pb-4 text-base text-gray-500">{item.about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
