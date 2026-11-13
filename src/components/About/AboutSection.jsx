
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiAward,
  FiTruck,
} from "react-icons/fi";
import { FaBicycle, FaMotorcycle } from "react-icons/fa";

import founderImage from "../../assets/founder.jpg";
import heroImage from "../../assets/hero-bicycle1.png";


const categories = [
  {
    number: "01",
    title: "Bi-cycles",
    subtitle: "Traditional Cycling",
    description:
      "Explore bicycle options for everyday travel, recreation and personal journeys.",
    icon: FaBicycle,
  },
  {
    number: "02",
    title: "E-cycles",
    subtitle: "Electric Cycling",
    description:
      "Discover electric-assisted cycling options for a different riding experience.",
    icon: FaBicycle,
  },
  {
    number: "03",
    title: "E-bikes",
    subtitle: "Electric Bikes",
    description:
      "Explore electric bike options designed around modern mobility.",
    icon: FaMotorcycle,
  },
  {
    number: "04",
    title: "E-vehicles",
    subtitle: "Electric Mobility",
    description:
      "Discover electric vehicle options for your mobility needs.",
    icon: FiTruck,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.9,
          ease: "easeOut",
        },
      };

  return (
    <main className="overflow-hidden bg-[#F8F7F0]">

      {/* ==========================================
          ABOUT HERO
      ========================================== */}
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#111111]">

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Bicycle on a journey"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AD28]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AD28]">
                About Philip Bicycle Studio
              </p>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              More Than
              <br />
              Just A
              <span className="block text-[#D4AD28]">
                Bicycle Store.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Every ride has a story. Discover Philip Bicycle Studio,
              where you can explore different ways to move and find
              a ride that fits your journey.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#our-story"
                className="group inline-flex items-center gap-3 bg-[#D4AD28] px-7 py-4 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-[#E8C84F]"
              >
                Discover Our Story
                <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D4AD28] hover:text-[#D4AD28]"
              >
                Get In Touch
                <FiArrowUpRight className="text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex">
          <span className="h-px w-12 bg-[#D4AD28]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Philip Bicycle Studio
          </span>
        </div>
      </section>


      {/* ==========================================
          OUR STORY
      ========================================== */}
      <section
        id="our-story"
        className="bg-[#F8F7F0] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">

          <motion.div {...reveal}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AD28]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92751A]">
                Our Story
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[#111111] md:text-5xl lg:text-6xl">
              Built Around
              <span className="block text-[#D4AD28]">
                Every Journey.
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-[#666666]">
              Philip Bicycle Studio brings together a range of
              bicycle and electric mobility options under one roof.
              Our focus is to help customers explore their choices
              and find a ride that suits their needs.
            </p>

            <p className="mt-5 text-base leading-8 text-[#666666]">
              From traditional bicycles to electric mobility,
              we aim to make discovering your next ride a simple
              and enjoyable experience.
            </p>

            <a
              href="/branches"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#111111] transition-colors hover:text-[#A78312]"
            >
              Explore Our Branches
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          <motion.div {...reveal} className="relative">
            <div className="relative min-h-[420px] overflow-hidden bg-[#111111] p-8 md:min-h-[500px] md:p-12">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D4AD28]/30" />
              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#D4AD28]/20" />

              <div className="relative z-10 flex h-full min-h-[350px] flex-col justify-between md:min-h-[400px]">
                <div>
                  <FiBicyclePlaceholder />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AD28]">
                    Our Philosophy
                  </p>

                  <h3 className="mt-5 max-w-md text-4xl font-extrabold leading-tight text-white md:text-5xl">
                    Every Ride
                    <span className="block text-[#D4AD28]">
                      Has A Story.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                    The right ride can make every journey feel
                    different. Find the one that moves you.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Philip Bicycle Studio
                  </span>
                  <FiArrowUpRight className="text-2xl text-[#D4AD28]" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-4 border-l-4 border-[#D4AD28]" />
          </motion.div>
        </div>
      </section>


      {/* ==========================================
          FOUNDER SECTION
      ========================================== */}
      <section className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          <motion.div {...reveal} className="mb-14 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AD28]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92751A]">
                The Person Behind The Studio
              </p>
              <span className="h-[2px] w-10 bg-[#D4AD28]" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#111111] md:text-5xl">
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="grid items-stretch gap-0 lg:grid-cols-2">

            <motion.div
              {...reveal}
              className="relative min-h-[420px] overflow-hidden bg-[#E8E6DC] md:min-h-[560px]"
            >
              <img
                src={founderImage}
                alt="Dr. Jenitta Watson"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D4AD28]" />
            </motion.div>

            <motion.div
              {...reveal}
              className="flex flex-col justify-center bg-[#111111] px-8 py-14 md:px-14 md:py-20"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-[#D4AD28] text-2xl text-[#111111]">
                <FiAward />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AD28]">
                Founder & Proprietor
              </p>

              <h3 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Dr. Jenitta Watson
                <span className="mt-2 block text-lg font-medium text-[#D4AD28]">
                  PhD
                </span>
              </h3>

              <div className="my-8 h-[2px] w-16 bg-[#D4AD28]" />

              <p className="text-base leading-8 text-white/70">
                Philip Bicycle Studio is led by Dr. Jenitta Watson.
                The studio brings together bicycle and electric
                mobility categories to give customers options
                for their everyday journeys.
              </p>

              <p className="mt-5 text-base leading-8 text-white/70">
                With a focus on customer needs and choice, the
                studio continues to serve customers through its
                branches.
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-white/80">
                <FiMapPin className="text-xl text-[#D4AD28]" />
                Philip Bicycle Studio
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ==========================================
          WHAT WE OFFER
          Cream background, no bottom mustard line
      ========================================== */}
      <section className="relative overflow-hidden bg-[#F8F7F0] px-6 py-24 md:px-12 md:py-32">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#111111]/[0.05]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#111111]/[0.05]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <motion.div
            {...reveal}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4AD28]" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92751A]">
                  What We Offer
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-[#111111] md:text-5xl lg:text-6xl">
                Explore Your
                <span className="block text-[#D4AD28]">
                  Ride Options.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#777777]">
              Different journeys call for different rides.
              Explore the categories available at Philip
              Bicycle Studio.
            </p>
          </motion.div>

          {/* Category Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  className="group relative flex min-h-[340px] flex-col overflow-hidden border border-white/10 bg-[#1A1A1A] p-7 transition-colors duration-500 hover:border-[#D4AD28]/60 hover:bg-[#222222]"
                >
                  <span className="pointer-events-none absolute -right-2 top-0 text-8xl font-black text-white/[0.035] transition-colors duration-500 group-hover:text-[#D4AD28]/[0.08]">
                    {item.number}
                  </span>

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-[#D4AD28]/40 text-3xl text-[#D4AD28] transition-all duration-500 group-hover:bg-[#D4AD28] group-hover:text-[#111111]">
                    <Icon />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AD28]">
                      {item.subtitle}
                    </p>

                    <h3 className="text-2xl font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Explore Category
                      </span>

                      <FiArrowUpRight className="text-xl text-[#D4AD28] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AD28] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Brand Statement */}
          <motion.div
            {...reveal}
            className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[#111111]/10 pt-10 text-center md:flex-row md:text-left"
          >
            <h3 className="text-2xl font-extrabold uppercase tracking-wide text-[#111111] md:text-3xl">
              Find The Ride That
              <span className="text-[#D4AD28]"> Moves You.</span>
            </h3>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#D4AD28] px-7 py-4 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-[#E8C84F]"
            >
              Contact Us
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

function FiBicyclePlaceholder() {
  return (
    <div className="flex h-16 w-16 items-center justify-center border border-[#D4AD28]/40 text-3xl text-[#D4AD28]">
      <FaBicycle />
    </div>
  );
}

export default AboutSection;
