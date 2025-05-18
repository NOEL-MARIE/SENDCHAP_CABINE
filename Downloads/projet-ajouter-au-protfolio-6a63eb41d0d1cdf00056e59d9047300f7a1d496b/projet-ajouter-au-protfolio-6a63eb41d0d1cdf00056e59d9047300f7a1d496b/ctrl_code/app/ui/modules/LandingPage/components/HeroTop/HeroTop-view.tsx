"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/app/ui/component/container/container";
import { Button } from "@/app/ui/design_system/Button/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroTop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const changingTextRef = useRef<HTMLSpanElement>(null);

  const keywords = [
    "Développeur Front-End",
    "Développeur Vue.js",
    "Passionné de design",
    "Créatif curieux",
    "Technophile",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!changingTextRef.current) return;

      // Animation de disparition
      gsap.to(changingTextRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % keywords.length);
          gsap.fromTo(
            changingTextRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4 }
          );
        },
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -80, rotateX: 45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 50, scale: 0.5, rotate: -20 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, scale: 0.8, rotateY: 30 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotateY: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 60, rotate: -10 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.3,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="home"
      className="text-gray_folio font-DancingBold pt-16"
      ref={containerRef}
    >
      <Container className="relative flex flex-col md:flex-row h-auto md:h-screen px-4 md:px-8 py-12 md:py-0">
        {/* Section gauche */}
        <div className="max-w-2xl w-full flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5 md:space-y-8">
          <div
            className="text-2xl sm:text-3xl md:text-4xl capitalize font-FleurDeLeah leading-tight"
            ref={titleRef}
          >
            <p>Je suis Gonzague Noël-Marie François</p>
            <p>
              <span className="text-primary_folio" ref={changingTextRef}>
                {keywords[currentWordIndex]}
              </span>
            </p>
          </div>

          <p
            className="capitalize text-gray_folio text-base sm:text-lg md:text-xl font-FleurDeLeah mt-4 max-w-md"
            ref={subtitleRef}
          >
            Il conçoit des sites web responsifs où les technologies rencontrent la créativité
          </p>

          <Button
            ClassName="flex items-center justify-center px-6 py-3 mt-6 transition-all duration-700"
          >
            <p className="drop-shadow-2xl font-extrabold capitalize animate-bounce text-base sm:text-lg">
              Contact me !!
            </p>
          </Button>
        </div>

        {/* Section droite */}
        <div className="relative w-full flex flex-col items-center pt-10 md:pt-14 justify-center">
          <Image
            src={"/asset/IMG_8281(1).JPG"}
            alt="author image"
            width={307}
            height={300}
            ref={imageRef}
            priority
          />
          <div
            className="p-1 w-[360px] mt-5 border justify-center group border-gray_folio flex items-center"
            ref={badgeRef}
          >
            <span className="h-4 w-4 m-2.5 flex bg-primary_folio animate-color-cycle"></span>
            <span className="capitalize text-gray_folio flex items-center pt-1 text-sm sm:text-base">
              front-end developer on <span className="ml-1">DevStudio</span>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
