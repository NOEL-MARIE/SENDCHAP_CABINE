"use client";

import { useEffect, useRef } from "react";
import { BoxInfo } from "@/app/ui/component/boxInfo/BoxInfo";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projectsectionview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hashtagRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du hashtag au scroll
      gsap.fromTo(
        hashtagRef.current,
        {
          opacity: 0,
          y: -100,
          scale: 0.5,
          rotate: -20,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation en cascade des boxes
      gsap.fromTo(
        boxesRef.current,
        {
          opacity: 0,
          y: 100,
          rotateX: 90,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.25,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col gap-9 mt-40 mx-auto px-4 sm:px-6 md:px-8 max-w-screen-lg"
      style={{ minHeight: "522px" }}
    >
      {/* Hashtag */}
      <div ref={hashtagRef} className="self-center md:self-start">
        <Hashtag varianthash="projects" />
      </div>

      {/* Boxes container */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
      
            <BoxInfo variant='container1'></BoxInfo>
            <BoxInfo variant='container2'></BoxInfo>
         
        
      </div>
    </div>
  );
};
