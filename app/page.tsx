
import Herosection from "./Home/Herosection";
import Navbar from "@/componets/navbar"; 
import Section1 from "./Home/section1";
import ServicesCard from "./Home/servicesCard";
import MissionSection from "./Home/Mission";
import QuickServiceSection from "./Home/quickServiceSection";
import BriefHistory from "./Home/history";
import ScrollToTopButton from "./Scroll/scroll";
import FAQ from "./Home/Faq";
import DoctorsSection from "./Home/doctorSection";
import BottomSection from "./Home/BottomSection";
import Footer from "@/componets/footer";
export default function page() {
  return (
    <>
      <Navbar />
     <Herosection/>
      <Section1/>
      <ServicesCard/>
      <MissionSection/>
      <QuickServiceSection/>
      <BriefHistory/>
      <FAQ/>
      <DoctorsSection/>
      <BottomSection/>
      <ScrollToTopButton/>
      <Footer/>
    </>
  );
}