import SectionTwo from "./sectionTwo";
import HeroSection from "./heroSection";
import Approach from "./approach";
import GetInvolved from "./getInvolved";
import Impact from "../Program/impact";
import DonatePage from "./donatePage";
import JoinUs from "./joinUs";
import Stories from "./stories";

const Home = () => {
  return (
    <div className="relative font-dmSans ">
      <HeroSection />
      <SectionTwo />
      <Approach />
      <GetInvolved />
      <DonatePage />
      <Stories />
      <Impact />
      <JoinUs />
    </div>
  );
};

export default Home;
