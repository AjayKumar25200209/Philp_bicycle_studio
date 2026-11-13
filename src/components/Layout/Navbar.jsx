
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";

import { FaBicycle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Branches", path: "/branches" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111] shadow-lg shadow-black/20">

      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">

        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AD28]/60 bg-[#D4AD28]/10 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-[#D4AD28]">

            <FaBicycle
              size={23}
              className="text-[#D4AD28] transition-all duration-300 group-hover:scale-110 group-hover:text-[#111111]"
            />

            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#111111] bg-[#D4AD28]" />
          </div>

          <div className="flex flex-col">
            <span className="text-[23px] font-black leading-none tracking-[1px] text-[#F8F7F0]">
              PHILIP<span className="text-[#D4AD28]">.</span>
            </span>

            <span className="mt-1.5 text-[8px] font-bold tracking-[3px] text-[#D4AD28]">
              BICYCLE STUDIO
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className="group relative py-3"
            >
              {({ isActive }) => (
                <span className="relative block">

                  <span
                    className={`text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[#E5C34C]"
                        : "text-[#F8F7F0]/80 group-hover:text-[#D4AD28]"
                    }`}
                  >
                    {link.name}
                  </span>

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#D4AD28] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          to="/contact"
          className="group hidden items-center gap-2 rounded-full bg-[#D4AD28] py-1.5 pl-5 pr-1.5 text-[10px] font-extrabold tracking-[0.8px] text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8C84F] lg:flex"
        >
          <span>LET'S CONNECT</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[#D4AD28] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#F8F7F0] group-hover:text-[#111111]">
            <FiArrowUpRight size={17} />
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AD28]/50 text-[#D4AD28] transition-all duration-300 hover:bg-[#D4AD28] hover:text-[#111111] lg:hidden"
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">

          <nav className="border-t border-white/10 bg-[#111111] px-6 pb-6 pt-4">

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#D4AD28]">
              Explore Philip
            </p>

            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b border-white/10 py-4 transition-colors ${
                    isActive
                      ? "text-[#E5C34C]"
                      : "text-[#F8F7F0]/80 hover:text-[#D4AD28]"
                  }`
                }
              >
                <div className="flex items-center gap-4">

                  <span className="text-[10px] font-bold text-[#D4AD28]">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-semibold">
                    {link.name}
                  </span>

                </div>

                <FiChevronRight
                  size={17}
                  className="text-[#D4AD28] transition-transform group-hover:translate-x-1"
                />
              </NavLink>
            ))}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-between rounded-full bg-[#D4AD28] py-2 pl-5 pr-2 text-xs font-bold text-[#111111] transition hover:bg-[#E8C84F]"
            >
              LET'S CONNECT

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-[#D4AD28]">
                <FiArrowUpRight size={19} />
              </span>
            </Link>

          </nav>
        </div>
      </div>

    </header>
  );
}

export default Navbar;
