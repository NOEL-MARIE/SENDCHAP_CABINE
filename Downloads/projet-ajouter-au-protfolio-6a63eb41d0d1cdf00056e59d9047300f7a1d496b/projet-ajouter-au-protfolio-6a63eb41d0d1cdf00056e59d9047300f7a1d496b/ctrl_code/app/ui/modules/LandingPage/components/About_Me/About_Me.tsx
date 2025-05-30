"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/app/ui/design_system/Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import React from "react";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";

gsap.registerPlugin(ScrollTrigger);

export const About_Me = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // div au lieu de <Image />
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power2.out", duration: 1 },
    });

    tl.fromTo(textRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0 })
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0 },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.6"
      );
  }, []);

  return (
    <div
      id="about-me"
      className="w-full px-4 sm:px-8 md:px-12 lg:px-0 max-w-6xl mx-auto"
    >
      <Hashtag varianthash="aboute me" className="pb-7" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Texte + bouton */}
        <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2">
          <div
            ref={textRef}
            className="text-gray_folio font-FleurDeLeah text-justify text-base sm:text-lg md:text-xl leading-relaxed"
          >
            De Gonzague Noël-Marie François – Développeur Front-End Passionné ✨
            🚀 Créatif, audacieux et persévérant, je transforme des idées en
            expériences web modernes et intuitives. Depuis plus d’un an, je
            conçois des sites responsifs de A à Z, aidant mes clients à bâtir
            une présence en ligne impactante. 💡 Toujours avide de nouveauté,
            j’explore sans relâche les dernières technologies et frameworks pour
            repousser les limites du possible. Chaque projet est un défi que je
            relève avec discipline, courage et détermination. 🔎 Mes valeurs :
            ✅ Persévérance – Rien ne m’arrête face aux défis 💪 ✅ Courage –
            Oser l’innovation et affronter l’inconnu 🦾 ✅ Discipline – La clé
            du succès et de l’excellence 🏆
            <span className="italic block my-3">
              &rdquo;La discipline est le pont entre les objectifs et les
              réalisations.&rdquo; – Jim Rohn 💬
            </span>
            Besoin d’un site web percutant et efficace ? Parlons-en ! 🎯
          </div>

          <Button
            ClassName="flex flex-row items-center justify-center capitalize font-DancingBold w-fit"
            variant="read more"
          >
            <p className="text-[16px]">read more </p>
            <IoIosArrowRoundForward className="text-[24px] pt-1 animate-pulse" />
          </Button>
        </div>

        {/* Image + Vidéo au survol */}
        <div className="w-full md:w-1/2 flex justify-center  mb-6 md:mb-0">
          <div ref={imageRef} className="relative  group overflow-hidden ">
            {/* Image */}
            <Image
              src="/asset/Images/one piece.jpeg"
              alt="one piece"
              width={539}
              height={200}
              className=" object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/asset/Luffy_Gif.gif"
              alt="one piece"
              width={239}
              height={200}
              className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Vidéo */}
          </div>
        </div>
      </div>
    </div>
  );
};
