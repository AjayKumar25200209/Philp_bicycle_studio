
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

function Branches() {
  return (
    <main className="min-h-screen bg-[#F8F7F0]">
      <Navbar />

      {/* Branches Page Content Placeholder */}
      <section className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#A4861E]">
            Find Us Near You
          </span>

          <h1 className="mt-5 text-4xl font-bold text-[#424B27] sm:text-5xl">
            Our Branches
          </h1>

          <p className="mt-4 text-sm text-[#777A62] sm:text-base">
            Explore our branches in Thoothukudi, Tiruchendur and Kovilpatti.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#D4AD28]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Branches;
