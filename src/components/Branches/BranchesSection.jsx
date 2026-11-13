
import { motion, useReducedMotion } from "motion/react";
import {
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
  FiNavigation,
  FiImage,
} from "react-icons/fi";

const phone = "9880844170";

// Correct path: BranchesSection.jsx is inside src/components/Branches/
// ../../assets points to src/assets/
const branchImageFiles = import.meta.glob(
  "../../assets/branch*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Convert imported images into a map using their filenames.
const branchImages = Object.fromEntries(
  Object.entries(branchImageFiles).map(([path, image]) => [
    path.split("/").pop().toLowerCase(),
    image,
  ])
);

// Assign each available image to its respective branch.
// Add more filenames to each array when you have additional photos.
const branches = [
  {
    number: "01",
    name: "Thoothukudi",
    shortName: "THOOTHUKUDI BRANCH",
    address:
      "#135B/1, Pole Pettai West, Opp. CSI St. Michael's Church, Henry Tower, Thoothukudi - 628 002",
    mapQuery:
      "Philip Bicycle Studio, #135B/1 Pole Pettai West, Henry Tower, Thoothukudi 628002",
    imageFiles: ["branch1.jpg"],
  },
  {
    number: "02",
    name: "Tiruchendur",
    shortName: "TIRUCHENDUR BRANCH",
    address:
      "#242A, Mariyamman Kovil Street, Shanmugapuram, Tiruchendur - 628216",
    mapQuery:
      "Philip Bicycle Studio, #242A Mariyamman Kovil Street, Shanmugapuram, Tiruchendur 628216",
    imageFiles: ["branch2.jpg"],
  },
  {
    number: "03",
    name: "Kovilpatti",
    shortName: "KOVILPATTI BRANCH",
    address:
      "#392F/1, Ethayapuram Main Road, North Thittankulam, Kovilpatti - 628 501",
    mapQuery:
      "Philip Bicycle Studio, #392F/1 Ethayapuram Main Road, North Thittankulam, Kovilpatti 628501",
    imageFiles: ["branch3.jpg"],
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
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

// Branch Image Gallery
function BranchGallery({ images, branchName }) {
  if (!images.length) {
    return (
      <div className="flex h-[250px] items-center justify-center bg-[#292929] text-white/40">
        <div className="text-center">
          <FiImage className="mx-auto text-4xl text-[#D4AD28]" />
          <p className="mt-3 text-xs">
            Add photos for {branchName}
          </p>
        </div>
      </div>
    );
  }

  // One image: display it across the entire gallery.
  if (images.length === 1) {
    return (
      <div className="group/gallery h-[250px] overflow-hidden bg-[#292929]">
        <img
          src={images[0]}
          alt={`${branchName} branch`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover/gallery:scale-105"
        />
      </div>
    );
  }

  // Two images: one large image and one smaller image.
  if (images.length === 2) {
    return (
      <div className="grid h-[250px] grid-cols-2 gap-1.5 overflow-hidden bg-[#111111]">
        {images.map((image, index) => (
          <div key={image} className="overflow-hidden">
            <img
              src={image}
              alt={`${branchName} branch view ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    );
  }

  // Three or more images: large image on the left, two on the right.
  return (
    <div className="grid h-[250px] grid-cols-2 grid-rows-2 gap-1.5 overflow-hidden bg-[#111111]">
      <div className="row-span-2 overflow-hidden">
        <img
          src={images[0]}
          alt={`${branchName} branch`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {images.slice(1, 3).map((image, index) => (
        <div key={image} className="overflow-hidden">
          <img
            src={image}
            alt={`${branchName} branch view ${index + 2}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

function BranchesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ==========================================
          BRANCHES HERO
      ========================================== */}
      <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#111111] text-white">
        <div className="pointer-events-none absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1684985038236-38a3b755b562?auto=format&fit=crop&w=2400&q=85"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-[#D4AD28]/20 sm:h-[650px] sm:w-[650px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.1,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
            className="max-w-4xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AD28]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AD28]">
                Find Us
              </p>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Three Locations.
              <span className="block text-[#D4AD28]">
                One Studio.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Visit Philip Bicycle Studio at any of our three
              locations. Find the branch closest to you and
              explore our bicycle and electric mobility options.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {branches.map((branch) => (
                <a
                  key={branch.number}
                  href={`#branch-${branch.number}`}
                  className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-[#D4AD28] hover:bg-[#D4AD28] hover:text-[#111111]"
                >
                  <FiMapPin className="text-[#D4AD28]" />
                  {branch.name}
                  <FiArrowUpRight />
                </a>
              ))}
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
          BRANCH LOCATIONS
      ========================================== */}
      <section className="bg-[#F8F7F0] px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
            className="mb-14"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AD28]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92751A]">
                Our Locations
              </p>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#111111] md:text-5xl">
              Visit Our
              <span className="block text-[#D4AD28]">
                Bicycle Studios.
              </span>
            </h2>
          </motion.div>

          {/* Branch Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-7 lg:grid-cols-3"
          >
            {branches.map((branch) => {
              const images = branch.imageFiles
                .map((filename) => branchImages[filename.toLowerCase()])
                .filter(Boolean);

              const mapsUrl =
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;

              return (
                <motion.article
                  key={branch.number}
                  id={`branch-${branch.number}`}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -7 }}
                  className="group relative flex scroll-mt-24 flex-col overflow-hidden border border-white/10 bg-[#1A1A1A] transition-colors duration-500 hover:border-[#D4AD28]/60 hover:bg-[#222222]"
                >
                  <BranchGallery
                    images={images}
                    branchName={branch.name}
                  />

                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    <span className="pointer-events-none absolute right-5 top-3 text-7xl font-black text-white/[0.035]">
                      {branch.number}
                    </span>

                    <p className="relative z-10 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AD28]">
                      {branch.shortName}
                    </p>

                    <h3 className="relative z-10 mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                      {branch.name}
                    </h3>

                    <div className="mt-6 flex gap-3">
                      <FiMapPin className="mt-1 shrink-0 text-xl text-[#D4AD28]" />
                      <p className="text-sm leading-7 text-white/60">
                        {branch.address}
                      </p>
                    </div>

                    <a
                      href={`tel:${phone}`}
                      className="mt-5 flex items-center gap-3 text-sm font-semibold text-white/70 transition-colors hover:text-[#D4AD28]"
                    >
                      <FiPhone className="text-[#D4AD28]" />
                      {phone}
                    </a>

                    <div className="mt-auto grid grid-cols-2 gap-3 border-t border-white/10 pt-7">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/direction inline-flex items-center justify-center gap-2 bg-[#D4AD28] px-3 py-3.5 text-xs font-extrabold text-[#111111] transition-colors duration-300 hover:bg-[#E8C84F]"
                      >
                        <FiNavigation size={16} />
                        DIRECTIONS
                        <FiArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover/direction:translate-x-1 group-hover/direction:-translate-y-1"
                        />
                      </a>

                      <a
                        href={`tel:${phone}`}
                        className="inline-flex items-center justify-center gap-2 border border-white/20 px-3 py-3.5 text-xs font-bold text-white transition-colors duration-300 hover:border-[#D4AD28] hover:text-[#D4AD28]"
                      >
                        <FiPhone size={15} />
                        CALL BRANCH
                      </a>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AD28] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CONTACT CTA
      ========================================== */}
      <section className="bg-white px-6 py-20 md:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: "easeOut",
          }}
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-[#111111]/10 bg-[#F8F7F0] p-7 sm:p-10 md:flex-row md:items-center"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#D4AD28]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#92751A]">
                Philip Bicycle Studio
              </p>
            </div>

            <h2 className="text-3xl font-extrabold text-[#111111] sm:text-4xl">
              We're Here To Help.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-[#777777]">
              Have questions about our locations? Get in touch
              with our team.
            </p>
          </div>

          <a
            href={`tel:${phone}`}
            className="group inline-flex shrink-0 items-center gap-3 bg-[#D4AD28] px-7 py-4 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-[#E8C84F]"
          >
            CONTACT US
            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </section>
    </>
  );
}

export default BranchesSection;
