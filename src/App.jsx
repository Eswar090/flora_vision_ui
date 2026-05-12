import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import TrendySection from "./sections/TrendySection";
import TopSelling from "./sections/TopSelling";
import ReviewSection from "./sections/ReviewSection";
import OxygenSection from "./sections/OxygenSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrendySection />
      <TopSelling />
      <ReviewSection />
      <OxygenSection />
      <Footer />
    </>
  );
}

export default App;
