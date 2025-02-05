import React from "react";
import Img1 from "../assets/shirt1.png";
import Img2 from "../assets/shirt2.png";
import Img3 from "../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    discription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempordo eiusmod tempor",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    discription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    discription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="p-[1rem] lg:px-[14rem] py-2">
        {/* Header Section */}
        <div className="mb-24 mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-20 md:gap-5">
          {ProductsData.map((data) => (
            <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]" data-aos="zoom-in">
              {/* Images Section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details Section */}
              <div className="p-4 text-center"> 
                {/* Srat rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                {/* Title */}
                <h2 className="text-xl font-bold">{data.title}</h2>
                {/* Description */}
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.discription}</p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
                {/* onClick={handleOrderPopup} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
