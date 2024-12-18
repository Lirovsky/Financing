import { cards } from "./const";

export default function ThreeOptions() {
  return (
    <div className="md:px-10">
      <div className="container mx-auto items-center py-14 text-white lg:flex">
        <div className="mx-auto w-10/12 gap-10 md:w-full lg:flex">
          {cards.map((item) => (
            <div key={item.id} className="flex gap-5 py-5">
              <div>{item.icon}</div>
              <div>
                <h4 className="mb-2 text-lg font-medium">{item.title}</h4>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
