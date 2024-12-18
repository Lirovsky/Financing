import Header from "./components/Header";
import MakePayment from "./components/MakePayment";
import ThreeOptions from "../../components/ThreeOptions";
import StraightForward from "../../components/StraightForward";
import OurServices from "../../components/OurServices";
import WannaTalk from "../../components/WannaTalk";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Latest from "../../components/Latest";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MakePayment />
      <ThreeOptions />
      <StraightForward />
      <OurServices title={"Our Services"} />
      <WannaTalk />
      <CaseStudies title={"Case Studies"} />
      <Testimonials />
      <Latest />
      <Footer />
    </div>
  );
}
