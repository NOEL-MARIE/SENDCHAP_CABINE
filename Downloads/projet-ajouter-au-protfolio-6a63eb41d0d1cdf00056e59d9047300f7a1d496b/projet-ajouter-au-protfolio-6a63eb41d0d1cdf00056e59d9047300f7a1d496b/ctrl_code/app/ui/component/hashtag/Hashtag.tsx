"use client";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  varianthash?:
    | "hashtag"
    | "projects"
    | "projectSimple"
    | "skills"
    | "aboute me"
    | "small project"
    | "contacts"
    | "my-fun-facts"
    | "complete-app"; 
  
  variantHr?: "hr";
  className?: string;
}

export const Hashtag = ({
  varianthash = "hashtag",
  variantHr = "hr",
  className,
}: Props) => {
  // La barre horizontale
  let variantofHr: string = "";
  if (variantHr === "hr") {
    variantofHr =
      "flex w-[400px] h-[0.5px] items-center justify-center border border-gray_folio";
  }

  // Gestion du texte qui doit s'afficher
  let displayText: string;
  switch (varianthash) {
    case "projects":
      displayText = "projects";
      break;
    case "projectSimple":
      displayText = "projectSimple";
      break;
    case "skills":
      displayText = "skills";
      break;
    case "aboute me":
      displayText = "about_me";
      break;
    case "small project":
      displayText = "small project";
      break;
    case "contacts":
      displayText = "contacts";
      break;
    case "my-fun-facts":
      displayText = "my-fun-facts";
      break;
    case "complete-app":
      displayText = "complete app"; 
      break;
    case "hashtag":
    default:
      displayText = "projects"; // Affiche `projects` par défaut pour "hashtag"
      break;
  }

  // Gestion des styles pour le hashtag
  let varhash: string =
    " font-FiraCode font-bold text-primary_folio text-[30px] ";
  if (varianthash === "hashtag") {
    varhash += " text-primary_folio"; // Style spécifique pour "hashtag"
  } else {
    varhash += " text-gray_folio"; // Style par défaut pour les autres
  }

  // Références pour les éléments à animer
  const textRef = useRef<HTMLDivElement>(null);
  const hrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation constante pour le texte avec un effet de mouvement de gauche à droite et un léger rebond
    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 30, // Déplacement horizontal
        yoyo: true, // Permet au mouvement de revenir en arrière (rebond)
        repeat: -1, // Répétition infinie
        duration: 2,
        ease: "power1.inOut", // Rythme fluide
        delay: 0.5, // Un petit délai avant de commencer
      });
    }

    // Animation de rotation constante pour la barre horizontale
    if (hrRef.current) {
      gsap.to(hrRef.current, {
        x: 30, // Déplacement horizontal
        yoyo: true, // Permet au mouvement de revenir en arrière (rebond)
        repeat: -1, // Répétition infinie
        duration: 2,
        ease: "power1.inOut", // Rythme fluide
        delay: 0.5, // Rotation linéaire
      });
    }
  }, []);

  return (
    <div className={clsx(className, "flex items-center")}>
      {/* Hashtag */}
      <div
        className={clsx(
          varhash,
          " ml-3 items-center flex text-3xl font-FleurDeLeah"
        )}
      >
        #
      </div>
      
      {/* Texte à animer */}
      <div
        ref={textRef}
        className="items-center flex font-FleurDeLeah text-gray_folio text-2xl   
       bg-gradient-to-r capitalize from-primary_folio to-gray_folio font-semibold bg-clip-text text-transparent"
      >
        {displayText}
      </div>
      
      {/* Barre horizontale animée */}
      <div
        ref={hrRef}
        className={clsx(
          variantofHr,
          "mt-[20.33335px] ml-5 border border-primary_folio"
        )}
      ></div>
    </div>
  );
};
