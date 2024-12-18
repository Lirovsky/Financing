import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carousel } from "./consts";

export default function CaseStudies({ title }) {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <div
          onClick={onClick}
          className="next-slick-arrow absolute mx-2 cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-white"
          style={{ top: "-70px", left: "50%" }}
        >
          NEXT
        </div>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <div
          onClick={onClick}
          className="next-slick-arrow absolute mx-2 cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-white"
          style={{ top: "-70px", right: "50%" }}
        >
          PREV
        </div>
      </div>
    );
  }
  var settings = {
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="mx-auto w-full px-10 pb-14 text-center md:w-5/6 lg:w-4/6">
          <h3 className="mb-3 text-3xl font-bold text-blue-700">{title}</h3>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="scroll-smooth px-10 pt-14">
          <div>
            <Slider {...settings}>
              {carousel.map((item) => {
                return (
                  <div key={item.id} className="rounded-lg border bg-white">
                    <div>
                      <img
                        src={item.image}
                        className="h-52 w-full rounded-t-lg object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-evenly p-5">
                      <h1 className="pb-5 text-xl font-medium">{item.name}</h1>
                      <p className="text-gray-500">{item.paragraph}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

CaseStudies.propTypes = {
  title: String,
  onClick: Function,
};
