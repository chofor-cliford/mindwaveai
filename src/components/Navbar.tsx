import React, { useEffect, useState } from "react";

import { styles } from "../styles";

import { logo, menu, close } from "../assets";
import { useGoogleLogin } from "@react-oauth/google";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState([])

    const login = useGoogleLogin({
      onSuccess: (tokenResponse) => console.log(tokenResponse),
    });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center fixed border-b-2 border-secondary top-0 z-20 drop-shadow-xl ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto py-5">
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer flex ">
            MindWaveAI
          </p>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <button
            onClick={() => login()}
            className=" hover:text-white text-[18px] cursor-pointer text-gray-400 font-medium"
          >
            Login
          </button>
          <button className="bg-blue-gradient rounded-md py-2 px-4 hover:text-gray-500 text-[18px] font-      cursor-pointer text-white">
            {" "}
            Sign up
          </button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none bg-transparent flex justify-end items-start flex-1 flex-col gap-4">
              <button className=" hover:text-white text-[18px] font-medium cursor-pointer text-gray-400">
                Login
              </button>
              <button className="bg-blue-gradient rounded-md py-2 px-8 hover:text-white text-[18px] font-medium cursor-pointer text-gray-500">
                {" "}
                Sign up
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
