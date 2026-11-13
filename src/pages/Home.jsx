
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Home/Hero";

function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F0]">
      <Navbar />

      <Hero />

      <Footer />
    </main>
  );
}

export default Home;
