import React from "react";
import { HeroTop } from "./components/HeroTop/HeroTop-view";
import { Projectsectionview } from "./components/project_section/project_section-view";
import { Skills_Page } from "@/app/ui/modules/LandingPage/components/Skills/Skills";
import { About_Me } from "./components/About_Me/About_Me";
import { Contact } from "./components/Contact/Contact";
import { AnimatedSection } from "../../Section_Animation";

export const LandingPageView = () => {
  return (
    <>
      <AnimatedSection animationType="fadeUp" bgColor="#282c33"> {/* violet foncé */}
        <HeroTop />
      </AnimatedSection>

      <AnimatedSection animationType="fadeOval" bgColor="#282c33"> {/* rose fuchsia */}
        <Projectsectionview />
      </AnimatedSection>

      <AnimatedSection animationType="fadeLeft" bgColor="#282c33"> {/* teal vert */}
        <Skills_Page />
      </AnimatedSection>

      <AnimatedSection animationType="fadeOval" bgColor="#282c33"> {/* orange */}
        <About_Me />
      </AnimatedSection>

      <AnimatedSection animationType="fadeUp" bgColor="#282c33"> {/* bleu */}
        <Contact />
      </AnimatedSection>
    </>
  );
};
