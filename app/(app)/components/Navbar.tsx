"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const services = [
    {
      _id: "1",
      title: "General",
      slug: { current: "general" },
    },
  ];
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when clicking on a menu item
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-10 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-semibold">
        <Image
          src="/alwan.png"
          className="h-16 md:h-20"
          alt="Logo"
          width={80}
          height={80}
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        ref={menuRef}
        className={`absolute md:static bg-white md:bg-transparent top-full left-0 w-full md:w-auto shadow-md md:shadow-none transition-transform duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
      >
        <ul className="md:flex md:items-center md:gap-8 py-4 md:py-0">
          {services.map((service) => (
            <li key={service._id} className="text-center md:text-left">
              <a
                href={`#${service.slug.current}`}
                className="block p-3 text-primary uppercase hover:text-secondary hover:border-b-2 border-secondary transition-all duration-300"
                onClick={handleMenuItemClick}
              >
                {service.title}
              </a>
            </li>
          ))}
          {["About Us"].map((item, index) => (
            <li key={index} className="text-center md:text-left">
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block p-3 text-primary hover:text-secondary hover:border-b-2 border-secondary transition-all duration-300"
                onClick={handleMenuItemClick}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button className="hidden md:block py-2 px-6 text-white bg-secondary rounded hover:bg-secondary-dark transition-all duration-300">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
