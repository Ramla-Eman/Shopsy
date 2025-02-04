import React from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#sevices",
  },
  {
    id: 3,
    name: "Kids Wear ",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#"
  },
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40">
        <div className="p-[1rem] lg:px-[14rem] py-2 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#" className="flex gap-2 font-bold text-2xl sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* Search bar*/}
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] bg-white transation-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary dark:border-gary-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button  */}
            <button
              onClick={() => alert("ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Dark Mode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lover Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-b-md bg-white p-2 text-black shadow-md">
              <ul>
                {
                  DropDownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
