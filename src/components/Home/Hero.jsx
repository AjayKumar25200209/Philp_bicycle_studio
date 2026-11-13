
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import heroImage from "../../assets/hero-bicycle1.png";


function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "BI-CYCLES",
    "E-CYCLES",
    "E-BIKES",
    "E-VEHICLES",
  ];

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.13,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#111111] text-[#F8F7F0]">

      {/* Background image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Cycling in a scenic outdoor landscape"
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.06,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: shouldReduceMotion ? 0 : 1.2 },
            scale: {
              duration: shouldReduceMotion ? 0 : 2,
              ease: "easeOut",
            },
          }}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-[#111111]/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111111]/85 via-[#111111]/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#111111]/65 via-transparent to-transparent" />

      {/* Decorative circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.5,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[550px] w-[550px] rounded-full border border-[#D4AD28]/20"
      />

      {/* Main content */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[760px]"
        >

          {/* Eyebrow */}
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <span className="h-[2px] w-8 bg-[#D4AD28] sm:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#D4AD28] sm:text-xs sm:tracking-[4px]">
              Philip Bicycle Studio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={reveal}
            className="max-w-[850px] text-[42px] font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Every Journey
            <br />
            Starts With a
            <br />
            <span className="italic text-[#D4AD28]">
              Ride.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={reveal}
            className="mt-5 max-w-[550px] text-sm leading-7 text-white/90 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg"
          >
            Discover bicycles, e-cycles, e-bikes and e-vehicles
            at Philip Bicycle Studio. Find a ride that fits your
            everyday journeys and adventures.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={reveal}
            className="mt-7 flex flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4"
          >

            <Link
              to="/branches"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#D4AD28] px-5 py-3 text-[11px] font-extrabold text-[#111111] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8C84F] active:scale-[0.98] min-[420px]:w-auto sm:gap-4 sm:px-7 sm:py-4 sm:text-sm"
            >
              <FiMapPin size={15} className="shrink-0 sm:h-[18px] sm:w-[18px]" />

              EXPLORE OUR BRANCHES

              <FiArrowRight
                size={16}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[19px] sm:w-[19px]"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/60 px-5 py-3 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AD28] hover:bg-white/10 active:scale-[0.98] min-[420px]:w-auto sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
            >
              <FiPhone size={14} className="shrink-0 text-[#D4AD28] sm:h-[17px] sm:w-[17px]" />

              CONTACT US

              <FiArrowUpRight
                size={15}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-[17px] sm:w-[17px]"
              />
            </Link>

          </motion.div>

          {/* Product categories */}
          <motion.div
            variants={reveal}
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/30 pt-6 min-[500px]:flex min-[500px]:flex-wrap min-[500px]:items-center min-[500px]:gap-x-7 sm:mt-16 sm:gap-x-9 sm:gap-y-5 sm:pt-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.8 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AD28] sm:h-2 sm:w-2" />

                <span className="text-[9px] font-bold tracking-[1.5px] text-white sm:text-xs sm:tracking-[2px]">
                  {category}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Bottom information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{
            delay: shouldReduceMotion ? 0 : 1.1,
          }}
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/25 pt-5 sm:mt-20 sm:flex-row sm:items-center sm:gap-5 sm:pt-6"
        >

          <p className="text-[9px] font-bold tracking-[2px] text-white/80 sm:text-[10px] sm:tracking-[3px]">
            RIDE BETTER. LIVE HAPPIER.
          </p>

          <Link
            to="/branches"
            className="group flex items-center gap-2 text-[9px] font-bold tracking-wider text-[#D4AD28] transition-colors hover:text-white sm:gap-3 sm:text-xs"
          >
            <FiMapPin size={14} className="shrink-0 sm:h-[17px] sm:w-[17px]" />

            THOOTHUKUDI · TIRUCHENDUR · KOVILPATTI

            <FiArrowUpRight
              size={14}
              className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
