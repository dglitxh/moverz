import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StandOut from "./components/Standout";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Frequentlyaskedquestions";
import ContactUs from "./components/Contact";

export default function Home() {
  return (
    <div className="container-lg mx-auto px-4">
<Hero />
<StandOut />
<Services />
<Pricing />
<Testimonials />
<FAQ />
<ContactUs />
    </div>
  );
}
