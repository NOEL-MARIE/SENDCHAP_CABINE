import clsx from "clsx";
import Image from "next/image"; // Import du composant Image de Next.js
import { Button } from "../../design_system/Button/Button";
import { FaGreaterThanEqual } from "react-icons/fa6";

interface InfoContainerData {
  imageSrc: string; // Lien de l'image
  subTitle: string; // Sous-titre
  title: string; // Titre principal
  description: string; // Description
}

interface InfoContainerProps {
  variant:
    | "container1"
    | "container2"
    | "container3"
    | "container4"
    | "container5"; // Choix du conteneur
}

const data: Record<string, InfoContainerData> = {
  container1: {
    imageSrc: "/asset/Project_Affiche_1.png",
    subTitle: "Sous-titre 1",
    title: "Titre 1",
    description: "Description détaillée pour l'élément 1.",
  },
  container2: {
    imageSrc: "/asset/Project_Affiche_2.png",
    subTitle: "Sous-titre 2",
    title: "Titre 2",
    description: "Description détaillée pour l'élément 2.",
  },
  container3: {
    imageSrc: "/asset/ChatGPT Image 3 avr. 2025, 12_48_19.png",
    subTitle: "Sous-titre 3",
    title: "Titre 3",
    description: "Description détaillée pour l'élément 3.",
  },
  container4: {
    imageSrc: "/asset/ChatGPT Image 8 avr. 2025, 02_10_38.png",
    subTitle: "Sous-titre 4",
    title: "Titre 4",
    description: "Description détaillée pour l'élément 4.",
  },
  container5: {
    imageSrc: "/asset/HeroTopIm.jpg",
    subTitle: "Sous-titre 5",
    title: "Titre 5",
    description: "Description détaillée pour l'élément 5.",
  },
};

export const BoxInfo = ({ variant }: InfoContainerProps) => {
  const item = data[variant];

  if (!item) {
    // Gestion des cas où le variant n'est pas valide
    return (
      <div
        className={clsx(
          "border border-red-500 font-FiraCode flex flex-col",
          "h-[391px] w-[330.58px] justify-center items-center text-center text-red-600"
        )}
      >
        <p>Erreur : Conteneur non trouvé</p>
        <p>Assurez-vous que le variant est correct.</p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "border border-gray_folio text-gray_folio font-FiraCode flex flex-col",
        "h-[391px] w-[330.58px]"
      )}
    >
      {/* Partie 1 : Image */}
      <div className={clsx("relative h-[195px] w-full")}>
        <Image
          src={item.imageSrc}
          alt={item.title}
          layout="fill" // Remplit le conteneur parent
          objectFit="contain" // Gère l'ajustement de l'image
          className="rounded-t-md"
        />
      </div>

      {/* Partie 2 : Sous-titre */}
      <div
        className={clsx(
          "h-[50px] flex items-center justify-center bg-Black_folio text-gray_folio border-y border-gray_folio"
        )}
      >
        {item.subTitle}
      </div>

      {/* Partie 3 : Titre et description */}
      <div className={clsx("flex-1 p-4 flex flex-col gap-2")}>
        {/* Titre */}
        <h3 className={clsx("text-lg font-bold text-gray_folio")}>
          {item.title}
        </h3>
        {/* Description */}
        <p className={clsx("text-gray_folio break-words")}>{item.description}</p>
      </div>
      <div className="flex pb-6 justify-between px-6">
        {" "}
        <Button>
          {" "}
          Live <span>{"<~>"}</span>
        </Button>
        <Button variant="cached">
          {" "}
          Cached <FaGreaterThanEqual />
        </Button>
      </div>
    </div>
  );
};
