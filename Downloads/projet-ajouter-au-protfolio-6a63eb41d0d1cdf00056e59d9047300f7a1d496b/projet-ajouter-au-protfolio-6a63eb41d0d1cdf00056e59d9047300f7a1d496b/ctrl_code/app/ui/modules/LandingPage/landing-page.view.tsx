import React from "react";
import { HeroTop } from "./components/HeroTop/HeroTop-view";
import { Projectsectionview } from "./components/project_section/project_section-view";
import { Skills_Page } from "@/app/ui/modules/LandingPage/components/Skills/Skills";
import { About_Me } from "./components/About_Me/About_Me";
import { Contact } from "./components/Contact/Contact";

export const LandingPageView = () => {
  return (
    <>
      <HeroTop />
      <Projectsectionview/>
      <Skills_Page/>
      <About_Me />
      <Contact/>
    </>
  );
};
