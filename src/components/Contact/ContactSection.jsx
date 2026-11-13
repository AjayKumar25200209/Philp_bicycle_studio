
import { motion, useReducedMotion } from "motion/react";

import {
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";

import contactHero from "../../assets/contact-hero.jpg";

const phone = "9880844170";
const email = "philipbicyclestudio@gmail.com";

const contactOptions = [
  {
    number: "01",
    title: "Call Us",
    subtitle: "Let's talk directly.",
    detail: phone,
    action: `tel:${phone}`,
    label: "MAKE A CALL",
    icon: FiPhone,
  },
  {
    number: "02",
    title: "Email Us",
    subtitle: "We're ready to listen.",
    detail: email,
    action: `mailto:${email}`,
    label: "SEND AN EMAIL",
    icon: FiMail,
  },
  {
    number: "03",
    title: "WhatsApp",
    subtitle: "A quick message is all it takes.",
    detail: "Start a conversation",
    action: `https://wa.me/91${phone}`,
    label: "MESSAGE US",
    icon: FiMessageCircle,
    external: true,
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

function ContactSection() {
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
          CONTACT HERO
      ========================================== */}
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#111111]">

        {/* Background Image */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2.2,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={contactHero}
            alt="Cyclist riding through a mountain landscape"
            className="h-full w-full object-cover object-[65%_40%]"
          />
        </motion.div>

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        {/* Decorative Ring */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D4AD28]/20 sm:h-[650px] sm:w-[650px]" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >

            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#D4AD28]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AD28]">
                Contact Philip Bicycle Studio
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              We'd Love
              <br />
              To
              <span className="block text-[#D4AD28]">
                Hear From You.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg"
            >
              Have a question or need assistance? Get in touch
              with Philip Bicycle Studio. Choose the way that
              works best for you.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href={`tel:${phone}`}
                className="group mt-10 inline-flex items-center gap-3 bg-[#D4AD28] px-7 py-4 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-[#E8C84F]"
              >
                <FiPhone size={17} />
                GET IN TOUCH
                <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom Brand Label */}
        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex">
          <span className="h-px w-12 bg-[#D4AD28]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Philip Bicycle Studio
          </span>
        </div>
      </section>


      {/* ==========================================
          CONTACT INFORMATION
      ========================================== */}
      <section className="bg-[#F8F7F0] px-6 py-24 md:px-12 md:py-32">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            {...reveal}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4AD28]" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92751A]">
                  Get In Touch
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-[#111111] md:text-5xl lg:text-6xl">
                Let's Make Your
                <span className="block text-[#D4AD28]">
                  Next Connection.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#777777]">
              Whether it's a quick question or a detailed enquiry,
              choose your preferred way to connect with us.
            </p>

          </motion.div>


          {/* ==========================================
              CONTACT CARDS
              Same visual system as About category cards
          ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >

            {contactOptions.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.number}
                  variants={itemVariants}
                  href={item.action}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  whileHover={shouldReduceMotion ? {} : { y: -8}}
                  className="group relative flex min-h-[340px] flex-col overflow-hidden border border-white/10 bg-[#1A1A1A] p-7 transition-colors duration-500 hover:border-[#D4AD28]/60 hover:bg-[#222222]"
                >

                  {/* Background Number */}
                  <span className="pointer-events-none absolute -right-2 top-0 text-8xl font-black text-white/[0.035] transition-colors duration-500 group-hover:text-[#D4AD28]/[0.08]">
                    {item.number}
                  </span>

                  {/* Icon Container */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-[#D4AD28]/40 text-3xl text-[#D4AD28] transition-all duration-500 group-hover:bg-[#D4AD28] group-hover:text-[#111111]">
                    <Icon strokeWidth={1.7} />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 mt-auto">

                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AD28]">
                      {item.subtitle}
                    </p>

                    <h3 className="text-2xl font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 break-all text-sm leading-7 text-white/50">
                      {item.detail}
                    </p>

                    {/* Card Footer */}
                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {item.label}
                      </span>

                      <FiArrowUpRight className="text-xl text-[#D4AD28] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AD28] transition-all duration-500 group-hover:w-full" />

                </motion.a>
              );
            })}

          </motion.div>


          {/* ==========================================
              WHATSAPP CTA
          ========================================== */}
          
{/* COMPACT WHATSAPP CTA */}
<motion.div
  {...reveal}
  className="mt-12 border border-white/10 bg-[#1A1A1A] p-5 sm:px-7 sm:py-5"
>
  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#D4AD28] text-xl text-[#111111]">
        <FiMessageCircle />
      </div>

      <div>
        <h2 className="text-lg font-extrabold text-white">
          Need Assistance?
        </h2>
        <p className="mt-1 text-xs text-white/50">
          We're just a message away.
        </p>
      </div>
    </div>

    <a
      href={`https://wa.me/91${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-3 bg-[#D4AD28] px-6 py-3.5 text-xs font-extrabold text-[#111111] transition-colors hover:bg-[#E8C84F]"
    >
      CHAT WITH US
      <FiArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>

  </div>
</motion.div>



          {/* Bottom Brand Statement */}
          <motion.div
            {...reveal}
            className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#111111]/10 pt-10 text-center md:flex-row md:text-left"
          >

            <h3 className="text-2xl font-extrabold uppercase tracking-wide text-[#111111] md:text-3xl">
              Every Ride
              <span className="text-[#D4AD28]"> Has A Story.</span>
            </h3>

            <a
              href="/branches"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#111111] transition-colors hover:text-[#92751A]"
            >
              FIND OUR BRANCHES
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default ContactSection;
