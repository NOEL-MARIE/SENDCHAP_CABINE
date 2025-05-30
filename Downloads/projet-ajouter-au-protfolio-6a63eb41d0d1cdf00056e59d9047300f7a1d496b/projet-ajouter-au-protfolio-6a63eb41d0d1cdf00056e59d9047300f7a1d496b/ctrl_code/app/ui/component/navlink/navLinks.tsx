"use client";
import { usePathname } from "next/navigation";

interface Props {
  varianthash?:
    | "home"
    | "about-me"
    | "works"
    | "contacts"
    | "all-media"
    | "my-fun-facts"
    | "small-projects"
    | "Project_View"
    | "complete-apps";
}

// Dictionnaire des labels lisibles
const displayTextMap: Record<NonNullable<Props["varianthash"]>, string> = {
  home: "home",
  "about-me": "about me",
  works: "works",
  contacts: "contacts",
  "all-media": "all media",
  "my-fun-facts": "my fun facts",
  "small-projects": "small projects",
  Project_View: "project view",
  "complete-apps": "complete apps",
};

export const NavbarHashtags = ({ varianthash = "home" }: Props) => {
  const pathname = usePathname() ?? "/";

  // Normalisation des chaînes en minuscules pour éviter les erreurs de casse
  const normalizedPathname = pathname.toLowerCase();

  // Normalisation du hash : on remplace underscore par tiret et on met en minuscules
  // Cela permet d’avoir des URLs cohérentes même si varianthash a un underscore
  const normalizedHash =
    varianthash === "home"
      ? "/"
      : `/${varianthash.toLowerCase().replace(/_/g, "-")}`;

  // Détection de l’état actif :
  // actif si pathname est exactement égal au hash
  // ou si pathname commence par hash suivi d’un slash (ex: /about-me/xyz)
  const isActive =
    normalizedPathname === normalizedHash ||
    normalizedPathname.startsWith(normalizedHash + "/");

  // Texte affiché
  const displayText = displayTextMap[varianthash];

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
