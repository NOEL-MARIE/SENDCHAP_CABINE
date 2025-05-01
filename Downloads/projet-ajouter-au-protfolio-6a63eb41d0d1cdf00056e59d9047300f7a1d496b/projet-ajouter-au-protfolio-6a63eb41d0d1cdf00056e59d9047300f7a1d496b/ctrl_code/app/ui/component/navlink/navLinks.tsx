"use client";
import { usePathname } from "next/navigation";

interface Props {
  varianthash?: "home" | "about-me" | "works" | "contacts" | "all-media" | "my-fun-facts" | "small-projects" | "complete-apps";
}

export const NavbarHashtags = ({ varianthash = "home" }: Props) => {
  const pathname = usePathname(); // Récupérer le chemin actuel

  // Texte affiché en fonction de `varianthash`
  const displayText =
    varianthash === "about-me"
      ? "about me"
      : varianthash === "works"
      ? "works"
      : varianthash === "contacts"
      ? "contacts"
      : varianthash === "all-media"
      ? "all media"
      : varianthash === "my-fun-facts"
      ? "my fun facts"
      : varianthash === "small-projects"
      ? "small projects"
      : varianthash === "complete-apps"
      ? "complete apps"
      : "home";

  // Vérifie si le lien est actif en fonction du chemin
  const isActive = pathname === `/${varianthash === "home" ? "" : varianthash}`;

  return (
    <div className="flex space-x-4 items-center">
      <div
        className={`flex items-center font-FiraCode capitalize transition-colors duration-300 ${
          isActive
            ? "text-primary_folio"
            : "text-gray_folio hover:text-primary_folio"
        }`}
      >
        <span className="font-FleurDeLeah font-bold text-[20px]">#</span>
        <span>{displayText}</span>
      </div>
    </div>
  );
};
