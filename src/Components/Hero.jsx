import React from "react";
import Image1 from "../assets/women.png";
import Image2 from "../assets/shopping.png";
import Image3 from "../assets/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Map for 
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% Off on all Man's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% Off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% Off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Hero = () => {
  // Slider
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100  dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45"></div>
      {/* Hero Section */}
      <Slider {...settings}>
        {ImageList.map((item) => (
          <div
            key={item.id}
            className="p-[1rem] lg:px-[18rem] py-2 pb-8 lg:pb-0 overflow-y-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 overflow-y-hidden">
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
                  {item.title}
                </h1>
                <p className="text-sm" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">{item.description}</p>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10"  data-aos="zoom-in" data-aos-once="true">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;