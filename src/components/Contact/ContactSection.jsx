import { motion } from "motion/react";
import {
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import contactHero from "../../assets/contact-hero.jpg";
const phone = "9880844170";
const email = "philipbicyclestudio@gmail.com";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ContactSection() {
  const contactOptions = [
    {
      title: "Call Us",
      description: "Speak directly with our team.",
      detail: phone,
      action: `tel:${phone}`,
      label: "CALL NOW",
      icon: FiPhone,
    },
    {
      title: "Email Us",
      description: "Send us your questions or enquiries.",
      detail: email,
      action: `mailto:${email}`,
      label: "SEND EMAIL",
      icon: FiMail,
    },
    {
      title: "WhatsApp",
      description: "Connect with us through WhatsApp.",
      detail: "Start a conversation",
      action: `https://wa.me/91${phone}`,
      label: "MESSAGE US",
      icon: FiMessageCircle,
      external: true,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F8F7F0]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#354126] text-white">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src={contactHero}
            alt="Cyclist riding through a mountain landscape"
            className="h-full w-full object-cover object-[65%_40%]"
          />
        </div>

        {/* Background overlays */}
        <div className="absolute inset-0 -z-10 bg-[#202A19]/25" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#202A19]/95 via-[#202A19]/65 to-[#202A19]/15" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#202A19]/45 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[700px]"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#D4AD28]" />

              <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#D4AD28] sm:text-xs">
                Philip Bicycle Studio
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
              We'd Love to
              <br />
              <span className="italic text-[#D4AD28]">Hear From You.</span>
            </h1>

            <p className="mt-5 max-w-[480px] text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Have a question or need assistance? Get in touch with Philip
              Bicycle Studio. We're always happy to hear from you.
            </p>

            <a
              href={`tel:${phone}`}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#D4AD28] px-6 py-3 text-xs font-extrabold text-[#354126] transition duration-300 hover:-translate-y-1 hover:bg-[#E8C84F] sm:py-3.5 sm:text-sm"
            >
              <FiPhone size={16} />
              GET IN TOUCH
              <FiArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact information */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mb-7 text-center sm:mb-9"
          >
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#A4861E] sm:text-xs">
              Contact Information
            </span>

            <h2 className="mt-2 text-2xl font-black text-[#354126] sm:text-3xl md:text-4xl">
              Let's Connect
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#777A62]">
              Choose the easiest way to reach us. We're just a call, message or
              email away.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  variants={itemVariants}
                  href={item.action}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group flex min-w-0 flex-col rounded-2xl border border-[#424B27]/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AD28]/15 text-[#424B27] transition-colors duration-300 group-hover:bg-[#D4AD28]">
                      <Icon size={21} />
                    </div>

                    <FiArrowUpRight
                      size={19}
                      className="text-[#A4861E] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#354126]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#777A62]">
                    {item.description}
                  </p>

                  <div className="mt-4 border-t border-[#424B27]/10 pt-3">
                    <p className="break-all text-sm font-bold text-[#424B27]">
                      {item.detail}
                    </p>

                    <p className="mt-1.5 text-[10px] font-extrabold tracking-[1.5px] text-[#A4861E]">
                      {item.label}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Compact WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#354126] px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left"
        >
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl">
              Need assistance?
            </h2>

            <p className="mt-1 text-sm text-white/65">
              Start a conversation with our team.
            </p>
          </div>

          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#D4AD28] px-5 py-3 text-[11px] font-extrabold text-[#354126] transition duration-300 hover:-translate-y-1 hover:bg-[#E8C84F] sm:text-xs"
          >
            <FiMessageCircle size={16} />
            CHAT WITH US
            <FiArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default ContactSection;
