
import { motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiCamera } from "react-icons/fi";

// Automatically load all customer images from src/assets/
const customerImageModules = import.meta.glob(
  "../../assets/customer*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Sort images numerically: customer1, customer2, customer10...
const customerImages = Object.entries(customerImageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  )
  .map(([path, image], index) => ({
    id: path,
    src: image,
    number: String(index + 1).padStart(2, "0"),
  }));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function CustomerGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#F8F7F0] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4AD28]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92751A]">
                Our Community
              </p>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
              Our Riders.
              <span className="block text-[#D4AD28]">
                Our Stories.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#777777] md:text-base">
              Every bicycle has a story. Take a look at some
              of the moments shared by our customers.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[#777777]">
            <FiCamera className="text-xl text-[#D4AD28]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Customer Moments
            </span>
          </div>
        </motion.div>

        {/* Customer Photo Gallery */}
        {customerImages.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          >
            {customerImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`group relative overflow-hidden bg-[#1A1A1A] ${
                  index === 0
                    ? "col-span-2 row-span-2 min-h-[320px] sm:min-h-[420px]"
                    : "min-h-[155px] sm:min-h-[200px]"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Philip Bicycle Studio customer moment ${image.number}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Image Number */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 sm:bottom-5 sm:left-5">
                  <span className="h-[2px] w-6 bg-[#D4AD28]" />

                  <span className="text-[10px] font-bold tracking-[0.2em] text-white">
                    {image.number}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/40 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <FiArrowUpRight size={18} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex min-h-[280px] flex-col items-center justify-center border border-dashed border-[#111111]/20 bg-white px-6 text-center">
            <FiCamera className="text-4xl text-[#D4AD28]" />

            <h3 className="mt-5 text-lg font-bold text-[#111111]">
              Customer Photos Coming Soon
            </h3>

            <p className="mt-2 text-sm text-[#777777]">
              Add customer photos to your assets folder to
              display them in this gallery.
            </p>
          </div>
        )}

        {/* Bottom Brand Statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
          }}
          className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#111111]/15 pt-7 sm:flex-row sm:items-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
            Real People. Real Rides. Real Memories.
          </p>

          <p className="text-xs font-medium tracking-wide text-[#92751A]">
            FIND THE RIDE THAT MOVES YOU.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default CustomerGallery;
