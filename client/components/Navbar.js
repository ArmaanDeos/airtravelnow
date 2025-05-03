"use client";
import { useState } from "react";
import {
  Menu,
  X,
  House,
  BriefcaseBusiness,
  Phone,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <House className="w-5 h-5" />, link: "/" },
    {
      name: "About Us",
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      link: "/about-us",
    },
    {
      name: "Contact Us",
      icon: <Phone className="w-5 h-5" />,
      link: "/contact-us",
    },
    {
      name: "Flight Deals",
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      link: "/",
      dropdown: [
        { name: "Flight Deals", link: "/flight-deals" },
        { name: "Virgin Atlantic", link: "/virgin-atlantic" },
        { name: "Turkish Airlines", link: "/turkish-airlines" },
        { name: "British Airways", link: "/british-airways" },
        { name: "EasyJet", link: "/easyjet" },
        { name: "Qatar Airways", link: "/qatar-airways" },
        { name: "Emirates ", link: "/emirates" },
        { name: "KLM Airways", link: "/klm" },
      ],
    },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-4 md:px-6 py-3 rounded-2xl shadow-md flex items-center justify-between transition-all duration-300 bg-white text-black backdrop-blur-md">
        <Link href="/">
          <Image
            src="/images/red-umb/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((item, i) => (
            <div key={i} className="relative group">
              {!item.dropdown ? (
                <Link
                  href={item.link}
                  className="flex items-center hover:text-primary-red transition"
                >
                  <span className="bg-primary-red text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === item.name ? "" : item.name
                      )
                    }
                    className="flex items-center hover:text-primary-red transition"
                  >
                    <span className="bg-primary-red text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-md p-2 z-50 ${
                      dropdownOpen === item.name ? "block" : "hidden"
                    } group-hover:block`}
                    onMouseLeave={() => setDropdownOpen("")}
                  >
                    {item.dropdown.map((subItem, j) => (
                      <Link
                        key={j}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:0800 058 4202"
          className="hidden md:flex items-center space-x-2 bg-primary-blue px-2 py-2 rounded-[8px_0_8px_0] transition-all duration-300 transform hover:scale-105"
        >
          <Image
            src="/images/red-umb/icons/call-agent-icon.png"
            alt="Call"
            width={35}
            height={35}
            className="animate-pulse hover:animate-none transition"
          />
          <div className="text-md">
            <p className="text-xs font-medium text-white">
              Call Us For 24x7 Support
            </p>
            <p className="font-bold text-base text-primary-red">
              0800 058 4202
            </p>
          </div>
        </a>

        {/* Mobile CTA + Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:0800 058 4202"
            className="flex items-center justify-center text-white text-xs font-semibold bg-[#cc0200] rounded-[8px_0_8px_0] px-4 py-2.5 uppercase transition hover:bg-[#9b0100] hover:scale-105"
          >
            <img
              src="/images/red-umb/icons/cal2.gif"
              alt="Call Now"
              className="w-5 h-5 mr-2"
            />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-primary-red"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#cc0200] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b bg-[#531c18]">
          <div className="bg-[#1e1e1e] p-2 rounded-full">
            <Link href="/">
              <Image
                src="/images/red-umb/red-logo.png"
                alt="Logo"
                width={100}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {navLinks.map((item, i) => (
            <li key={i}>
              {!item.dropdown ? (
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center text-white hover:text-primary-red"
                >
                  <span className="bg-primary-blue text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                    {item.icon}
                  </span>
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === item.name ? "" : item.name
                      )
                    }
                    className="flex items-center text-white hover:text-primary-red"
                  >
                    <span className="bg-primary-blue text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                      {item.icon}
                    </span>
                    <span className="text-base font-medium">{item.name}</span>
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </button>
                  {dropdownOpen === item.name &&
                    item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.link}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-white pl-10 hover:text-yellow-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                </div>
              )}
              <div className="h-[2px] bg-gradient-to-r from-red-500 to-white w-full mt-2"></div>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
