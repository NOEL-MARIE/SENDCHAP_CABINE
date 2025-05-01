"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Layout from "../ui/component/layout/layout";
import { AboutMe } from "../ui/modules/special_page/component/About_me/about_me";
import { Url_section } from "../ui/modules/special_page/component/project/component/url/url_section";
import { Skills } from "../ui/modules/LandingPage/components/About_Me/component/skill/Skills";
import { FunFacts } from "../ui/component/fun Fact/FunFact";

export default function Home() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const letters = textRef.current?.querySelectorAll("span");

    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.5,
        }
      );
    }
  }, []);

  const text = "Who am I?";

  return (
    <>
      <div className="bg-Black_folio">
        <Layout ClassName="bg-Black_folio w-screen h-screen">
          <div className="w-[183] h-[77] pb-32 pt-10 flex flex-col gap-8">
            <Url_section />

            {/* Texte animé lettre par lettre */}
            <p
              ref={textRef}
              className="font-FiraCodeBold text-gray_folio text-[18px] flex gap-[1px]"
            >
              {text.split("").map((char, index) => (
                <span key={index} className="inline-block">
                  {char}
                </span>
              ))}
            </p>
          </div>
          <AboutMe />
          <Skills />
          <FunFacts />
        </Layout>
      </div>
    </>
  );
}
