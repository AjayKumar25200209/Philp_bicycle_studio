
import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

import {
  FaBicycle,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Branches", path: "/branches" },
    { name: "Contact Us", path: "/contact" },
  ];

  const branches = [
    {
      name: "Thoothukudi",
      address: "Pole Pettai West, Thoothukudi – 628002",
    },
    {
      name: "Tiruchendur",
      address: "Shanmugapuram, Tiruchendur – 628216",
    },
    {
      name: "Kovilpatti",
      address: "North Thittankulam, Kovilpatti – 628501",
    },
  ];

  const phone = "9880844170";
  const email = "philipbicyclestudio@gmail.com";

  return (
    <footer className="bg-[#354126] text-[#F8F7F0]">

      <div className="mx-auto max-w-[1440px] px-6 pb-6 pt-10 sm:px-10 sm:pb-7 sm:pt-12 lg:px-14">

        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-9 border-b border-white/15 pb-9 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">

            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AD28]/60 bg-[#D4AD28]/10 transition duration-300 group-hover:bg-[#D4AD28]">
                <FaBicycle
                  size={23}
                  className="text-[#D4AD28] transition group-hover:text-[#354126]"
                />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-wider sm:text-2xl">
                  PHILIP<span className="text-[#D4AD28]">.</span>
                </h2>

                <p className="mt-0.5 text-[9px] font-bold tracking-[3px] text-[#D4AD28]">
                  BICYCLE STUDIO
                </p>
              </div>
            </Link>

            <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
              EVERY RIDE
              <span className="block text-[#D4AD28]">
                HAS A STORY.
              </span>
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
              Explore the world of bicycles and electric mobility
              with Philip Bicycle Studio. We look forward to being
              part of your journey.
            </p>

            {/* Social links */}
            <div className="mt-5 flex gap-2.5">

              <a
                href={`https://wa.me/91${phone}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-[#D4AD28] hover:bg-[#D4AD28] hover:text-[#354126]"
              >
                <FaWhatsapp size={16} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-[#D4AD28] hover:bg-[#D4AD28] hover:text-[#354126]"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-[#D4AD28] hover:bg-[#D4AD28] hover:text-[#354126]"
              >
                <FaInstagram size={16} />
              </a>

            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">

            <h3 className="text-xs font-bold tracking-wider text-[#D4AD28] sm:text-sm">
              QUICK LINKS
            </h3>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-white/70 transition hover:text-[#D4AD28]"
                  >
                    <FiArrowUpRight
                      size={13}
                      className="shrink-0 text-[#D4AD28] transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div className="lg:col-span-3">

            <h3 className="text-xs font-bold tracking-wider text-[#D4AD28] sm:text-sm">
              OUR BRANCHES
            </h3>

            <div className="mt-5 space-y-4">
              {branches.map((branch) => (
                <div key={branch.name} className="flex gap-2.5">

                  <FiMapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#D4AD28]"
                  />

                  <div>
                    <h4 className="text-sm font-semibold">
                      {branch.name}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                      {branch.address}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">

            <h3 className="text-xs font-bold tracking-wider text-[#D4AD28] sm:text-sm">
              GET IN TOUCH
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2.5 text-sm text-white/75 transition hover:text-[#D4AD28]"
              >
                <FiPhone size={16} className="shrink-0 text-[#D4AD28]" />
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-2.5 break-all text-sm text-white/75 transition hover:text-[#D4AD28]"
              >
                <FiMail size={16} className="mt-0.5 shrink-0 text-[#D4AD28]" />
                {email}
              </a>

              <div className="flex items-center gap-2.5 text-sm text-white/75">
                <FiClock size={16} className="shrink-0 text-[#D4AD28]" />
                Visit us at our branches
              </div>

            </div>

            <Link
              to="/contact"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#D4AD28] px-5 py-2.5 text-[11px] font-bold text-[#354126] transition hover:bg-[#E8C84F]"
            >
              CONTACT US

              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center sm:flex-row sm:text-left">

          <p className="text-[11px] text-white/50">
            © {currentYear} Philip Bicycle Studio. All rights reserved.
          </p>

          <p className="text-[9px] font-bold tracking-[1.5px] text-[#D4AD28] sm:text-[10px] sm:tracking-[2px]">
            RIDE YOUR WAY. LIVE YOUR JOURNEY.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
