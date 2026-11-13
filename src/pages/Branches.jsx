
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import BranchesSection from "../components/Branches/BranchesSection";

function Branches() {
  return (
    <main className="min-h-screen bg-[#F8F7F0]">
      <Navbar />
      <BranchesSection />
      <Footer />
    </main>
  );
}

export default Branches;
