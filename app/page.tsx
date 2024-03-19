import Category from "./components/Category";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Todays from "./components/Todays";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Todays />
      <Category />
      <Services />
    </div>
  );
}
