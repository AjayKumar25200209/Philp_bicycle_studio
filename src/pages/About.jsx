
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

function About() {
  return (
    <main className="min-h-screen bg-[#F8F7F0]">
      <Navbar />

      {/* About Page Content Placeholder */}
      <section className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#A4861E]">
            Get to Know Us
          </span>

          <h1 className="mt-5 text-4xl font-bold text-[#424B27] sm:text-5xl">
            About Philip Bicycle Studio
          </h1>

          <p className="mt-4 text-sm text-[#777A62] sm:text-base">
            Our company story and introduction will be added here.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#D4AD28]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;
