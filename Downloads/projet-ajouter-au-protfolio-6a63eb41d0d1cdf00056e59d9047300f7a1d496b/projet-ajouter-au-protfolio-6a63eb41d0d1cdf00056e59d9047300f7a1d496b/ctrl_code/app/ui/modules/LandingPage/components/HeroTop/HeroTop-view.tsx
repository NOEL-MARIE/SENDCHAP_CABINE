"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titre principal
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

      // Sous-titre
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

      // Bouton
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

      // Image
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

      // Badge
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
            <p>
              De Gonzague is a
              <span className="text-primary_folio"> web designer</span> and
            </p>
            <p className="text-primary_folio">front-end developer</p>
          </div>

          <p
            className="capitalize text-gray_folio text-base sm:text-lg md:text-xl font-FleurDeLeah mt-4 max-w-md"
            ref={subtitleRef}
          >
            He crafts responsive websites where technologies meet creativity
          </p>

          <Button ClassName="flex items-center justify-center px-6 py-3 mt-6 transition-all duration-700">
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
