import Footer from "../../components/Footer";
import OurTeam from "./components/OurTeam";
import StraightForward from "../../components/StraightForward";
import ThreeOptions from "../../components/ThreeOptions";

export default function About() {
  return (
    <div>
      <h1 className="flex h-96 items-center justify-center text-6xl font-bold text-white">
        About
      </h1>
      <StraightForward />
      <ThreeOptions />
      <OurTeam />
      <Footer />
    </div>
  );
}
