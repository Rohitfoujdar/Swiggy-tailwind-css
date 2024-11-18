import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";


function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        className="black-overlay h-full w-full fixed "
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="h-full w-[400px] bg-white absolute duration-[500ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="max-w-[100px]">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
              className="w-full"
              alt="logo"
            />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanada
            </span>{" "}
            Jodhpur, Rajasthan, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline text-[1.3rem] text-[#fc8019] cursor-pointer"
            />
          </div>
          <div className="flex items-center list-none gap-8 ml-auto font-semibold text-[18px]">
          <li>
            <IoIosSearch className="inline"/>
            Search
          </li>
          <li>
           <CiDiscount1 className="inline"/>
            Offer
          </li>
          <li>
            <IoIosSearch className="inline"/>
            Help
          </li>
          <li>
            <IoIosSearch className="inline"/>
            Sign
          </li>
          <li>
            <IoIosSearch className="inline"/>
            Cart
          </li>
            
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
