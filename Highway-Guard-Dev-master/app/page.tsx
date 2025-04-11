import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";

import OurExpertiseSection from "@/components/OurExpertiseSection";
import SolutionsSection from "@/components/SolutionsSection";
// import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <OurExpertiseSection />
      {/* <TeamSection /> */}
      <ContactSection />
    </>
  );
}
