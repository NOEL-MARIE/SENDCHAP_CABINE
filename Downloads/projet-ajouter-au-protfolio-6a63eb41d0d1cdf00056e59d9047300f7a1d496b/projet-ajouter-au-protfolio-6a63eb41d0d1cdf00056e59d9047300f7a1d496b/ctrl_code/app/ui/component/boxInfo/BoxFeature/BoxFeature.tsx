"use client";
import clsx from "clsx";
import { Code } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

interface BoxFeatureProps {
  title: string;
  className?: string;
  description?: string;
}

export const BoxFeature = ({
  title = "Développement Web",
  className,
  description = "Création d’interfaces web modernes et responsives avec React et Vue.",
}: BoxFeatureProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation lors du scroll
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      className={clsx(
        "w-[196px] h-[143px] bg-Black_folio shadow-lg p-6 border border-gray_folio text-gray_folio font-FiraCode flex flex-col",
        className
      )}
    >
      {/* Titre avec icône */}
      <div className="flex items-center gap-2">
        <Code size={18} className="text-primary_folio" />
        <h2 className="text-md font-FleurDeLeah text-white">{title}</h2>
      </div>

      {/* Barre de séparation */}
      <div className="w-full h-[1px] bg-gray-700 my-2"></div>

      {/* Description */}
      <p className="text-sm text-gray_folio font-FleurDeLeah">{description}</p>
    </div>
  );
};
