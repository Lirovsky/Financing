import OurServices from "../../components/OurServices";
import CaseStudies from "../../components/CaseStudies";
import Footer from "../../components/Footer";
import WannaTalk from "../../components/WannaTalk";

export default function Services() {
  return (
    <div>
      <h1 className="flex h-96 items-center justify-center text-6xl font-bold text-white">
        Our Services
      </h1>
      <OurServices title={"Featured Services"} />
      <WannaTalk />
      <CaseStudies title={"Our Services"} />
      <Footer />
    </div>
  );
}
