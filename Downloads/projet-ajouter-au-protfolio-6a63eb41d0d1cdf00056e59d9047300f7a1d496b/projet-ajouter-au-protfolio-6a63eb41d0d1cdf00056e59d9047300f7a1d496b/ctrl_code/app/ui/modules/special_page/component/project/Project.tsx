import React from "react";
import { Url_section } from "./component/url/url_section";
import { App_Completed } from "./component/completed app/App_Completed";
import { Samll_App } from "./component/small_project/small_project";
import { AnimatedSection } from "@/app/ui/Section_Animation";

export const Projectview = () => {
  return (
    <AnimatedSection animationType="fadeOval" bgColor="#D53F8C"> {/* fond rose fuchsia */}
      <Url_section />
      <App_Completed />
      <Samll_App />
    </AnimatedSection>
  );
};
