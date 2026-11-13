
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Home/Hero";
import CustomerGallery from "../components/Home/CustomerGallery";

function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F0]">
      <Navbar />
      <Hero />
      <CustomerGallery />
      <Footer />
    </main>
  );
}

export default Home;
