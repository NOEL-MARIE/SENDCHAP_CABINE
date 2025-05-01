"use client";
import { BoxFeature } from "@/app/ui/component/boxInfo/BoxFeature/BoxFeature";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Skills_Page = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const columnRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation de l’image à gauche
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animation des colonnes avec effet en cascade
      columnRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="works"
      className="w-[1024px] h-auto flex flex-col gap-9 pb-20"
      ref={sectionRef}
    >
      <Hashtag varianthash="skills" className="mt-32 mb-8" />

      <div className="flex flex-row items-center flex-wrap gap-4">
        {/* Illustration à gauche */}
        <div className="flex-shrink-0">
          <Image
            ref={imageRef}
            src="/asset/Svg/skills-group_img.svg"
            alt="Illustration Design"
            width={349}
            height={282}
          />
        </div>

        {/* Boîtes de compétences */}
        <div className="flex justify-between gap-4 ml-auto mr-4">
          {/* Colonne 1 */}
          <div ref={el => (columnRefs.current[0] = el!)}>
            <BoxFeature
              title="Languages"
              description="JavaScript • TypeScript • HTML5 • CSS3"
            />
          </div>

          {/* Colonne 2 */}
          <div
            className="flex flex-col gap-2"
            ref={el => (columnRefs.current[1] = el!)}
          >
            <BoxFeature
              title="Databases"
              description="Firebase Firestore • Supabase • MongoDB"
            />
            <BoxFeature
              title="Tools"
              description="Git • Figma • VS Code • Postman"
            />
          </div>

          {/* Colonne 3 */}
          <div
            className="flex flex-col gap-2"
            ref={el => (columnRefs.current[2] = el!)}
          >
            <BoxFeature
              title="Frameworks"
              description="Vue.js • Next.js • React.js"
            />
            <BoxFeature
              title="Other"
              description="ShadCN • Tailwind CSS • Vite • Node.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
