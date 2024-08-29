import React, { useEffect, useRef } from "react";
//icons
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

export default function App() {
  const aboutRef = useRef(null);
  const kontaktRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      duration: 4000,
    });
  };

  const handleKontaktClick = () => {
    kontaktRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      duration: 4000,
    });
  };

  return (
    <div className="mx-auto w-[1350px] border">
      <header>
        <div className="top_bar justify-between bg-gray-300 h-[60px] border flex">
          <div className="flex">
            <div className="flex items-center gap-2 ">
              <FaPhone /> <a href="tel:+998770066662">+998 77 006 66 62</a>
            </div>
            <div className="flex gap-2 items-center ml-[50px]">
              <FaLocationDot />
              Here will be our location
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FaTelegram />
            <FaFacebookF />
            <CiYoutube />
            <FaInstagram />
          </div>
        </div>
        <nav className="">
          <ul className="flex gap-6">
            <li>
              <a href="" onClick={handleAboutClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={handleAboutClick}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={handleKontaktClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        <div className="w-[1200px] m-10 h-[200px] bg-red-600">home</div>
        <section
          id="about"
          className="w-[1200px] mt-[200px] m-10  h-[200px] bg-red-600"
          ref={aboutRef}
        >
          about
        </section>

        <section
          id="kontakt"
          className="w-[1200px] mt-[200px] m-10 h-[200px] bg-red-600"
          ref={kontaktRef}
        >
          kantak
        </section>
        <div className=""></div>
      </main>
    </div>
  );
}
