import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { carousel } from "./consts";

export default function Testimonials() {
  return (
    <div className="border-t-2 border-white/95 bg-white/95 pb-20">
      <div className="container mx-auto px-10">
        <div className="mx-auto w-full py-14 text-center md:w-5/6 lg:w-3/6">
          <h3 className="mb-3 text-3xl font-bold text-blue-700">
            Testimonials
          </h3>
        </div>
        <div className="scroll-smooth">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {carousel.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="rounded-lg bg-white md:flex">
                    <div>
                      <img
                        src={item.image}
                        className="h-auto w-full md:h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly gap-5 p-10 md:w-10/12 md:p-20 lg:w-8/12">
                      <p className="italic">{item.paragraph}</p>
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-gray-500">{item.charge}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
