"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Contact_box } from "@/app/ui/component/contact_box/contact_box";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";

// Enregistrement du plugin
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={contactRef} id="contacts" className="pt-10">
      <Hashtag varianthash="contacts" />
      <div className="flex flex-row justify-between mt-6 mb-14 items-center">
        <div>
          <p className="font-FleurDeLeah text-justify text-gray_folio">
            I’m interested in freelance opportunities. <br />
            However, if you have other request or question, don’t hesitate to
            contact me
          </p>
        </div>
        <div>
          <Contact_box />
        </div>
      </div>
    </div>
  );
};
