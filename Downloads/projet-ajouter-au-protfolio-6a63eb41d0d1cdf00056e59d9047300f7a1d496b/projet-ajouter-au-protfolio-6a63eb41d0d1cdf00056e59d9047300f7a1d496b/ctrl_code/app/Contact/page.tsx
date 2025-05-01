"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from "../ui/component/layout/layout";
import { Contactview } from "../ui/modules/special_page/component/contact/contact";
import { Url_section } from "../ui/modules/special_page/component/project/component/url/url_section";

// Enregistrer ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%", // début de l’animation quand le haut entre dans 85% de la hauteur du viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-Black_folio">
      <Layout ClassName="bg-Black_folio">
        <Url_section />

        <div ref={contactRef} className="h-screen">
          <Contactview />
        </div>
      </Layout>
    </div>
  );
}
