"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../ui/component/layout/layout";
import { AboutMe } from "../ui/modules/special_page/component/About_me/about_me";
import { Url_section } from "../ui/modules/special_page/component/project/component/url/url_section";
import { Skills } from "../ui/modules/LandingPage/components/About_Me/component/skill/Skills";
import { FunFacts } from "../ui/component/fun Fact/FunFact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const textRef = useRef<HTMLParagraphElement>(null);

  // Refs pour wrapper des sections (contenu + ovale)
  const urlWrapperRef = useRef<HTMLDivElement>(null);
  const aboutWrapperRef = useRef<HTMLDivElement>(null);
  const skillsWrapperRef = useRef<HTMLDivElement>(null);
  const funFactsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation lettres "Who am I?"
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

    // Fonction d'animation ovale pour une section donnée
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const animateOval = (wrapper: HTMLElement | null, p0: string) => {
      if (!wrapper) return;

      const oval = wrapper.querySelector(".oval-background") as HTMLElement;

      gsap.fromTo(
        oval,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.2,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    };

    // URL Section Animation (contenu + ovale)
    if (urlWrapperRef.current) {
      gsap.fromTo(
        urlWrapperRef.current.querySelector(".content"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: urlWrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 1,
          ease: "power2.out",
        }
      );
      animateOval(urlWrapperRef.current, "#282c33");
    }

    // About Me Section Animation (contenu + ovale)
    if (aboutWrapperRef.current) {
      gsap.fromTo(
        aboutWrapperRef.current.querySelector(".content"),
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: aboutWrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 1,
          ease: "power2.out",
        }
      );
      animateOval(aboutWrapperRef.current, "#282c33");
    }

    // Skills Section Animation (contenu + ovale)
    if (skillsWrapperRef.current) {
      gsap.fromTo(
        skillsWrapperRef.current.querySelector(".content"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: skillsWrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 1,
          ease: "power2.out",
        }
      );
      animateOval(skillsWrapperRef.current, "#88B04B");
    }

    // FunFacts Section Animation (contenu + ovale)
    if (funFactsWrapperRef.current) {
      gsap.fromTo(
        funFactsWrapperRef.current.querySelector(".content"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: funFactsWrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 1,
          ease: "power2.out",
        }
      );
      animateOval(funFactsWrapperRef.current, "#282c33");
    }
  }, []);

  const text = "Who am I?";

  return (
    <>
      <div className="bg-Black_folio">
        <Layout ClassName="bg-Black_folio w-screen min-h-screen flex flex-col gap-20 py-20 px-10">
          {/* URL Section avec ovale */}
          <div
            ref={urlWrapperRef}
            className="relative overflow-visible rounded-lg"
            style={{ zIndex: 1 }}
          >
            <div
              className="oval-background pointer-events-none absolute -top-20 -left-20 w-[300px] h-[200px] rounded-full blur-3xl"
              style={{ backgroundColor: "#FF6F61", opacity: 0.2, zIndex: -1 }}
            ></div>
            <div className="content relative z-10">
              <Url_section />
            </div>
          </div>

          {/* Texte animé */}
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

          {/* About Me Section avec ovale */}
          <div
            ref={aboutWrapperRef}
            className="relative overflow-visible rounded-lg"
            style={{ zIndex: 1 }}
          >
            <div
              className="oval-background pointer-events-none absolute -top-20 -right-20 w-[300px] h-[200px] rounded-full blur-3xl"
              style={{ backgroundColor: "#6B5B95", opacity: 0.2, zIndex: -1 }}
            ></div>
            <div className="content relative z-10">
              <AboutMe />
            </div>
          </div>

          {/* Skills Section avec ovale */}
          <div
            ref={skillsWrapperRef}
            className="relative overflow-visible rounded-lg"
            style={{ zIndex: 1 }}
          >
            <div
              className="oval-background pointer-events-none absolute -bottom-20 -left-10 w-[300px] h-[200px] rounded-full blur-3xl"
              style={{ backgroundColor: "#88B04B", opacity: 0.2, zIndex: -1 }}
            ></div>
            <div className="content relative z-10">
              <Skills />
            </div>
          </div>

          {/* FunFacts Section avec ovale */}
          <div
            ref={funFactsWrapperRef}
            className="relative overflow-visible rounded-lg"
            style={{ zIndex: 1 }}
          >
            <div
              className="oval-background pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[200px] rounded-full blur-3xl"
              style={{ backgroundColor: "#F7CAC9", opacity: 0.2, zIndex: -1 }}
            ></div>
            <div className="content relative z-10">
              <FunFacts />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
