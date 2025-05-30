import clsx from "clsx";
import Image from "next/image";
import { Button } from "../../design_system/Button/Button";
import { FaGreaterThanEqual } from "react-icons/fa6";

interface InfoContainerData {
  imageSrc: string;
  subTitle: string;
  title: string;
  description: string;
  href_Project?: string; // Propriété optionnelle pour le lien
}

interface InfoContainerProps {
  variant:
    | "container1"
    | "container2"
    | "container3"
    | "container4"
    | "container5";
}

const data: Record<string, InfoContainerData> = {
  container1: {
    imageSrc: "/asset/Project_Affiche_1.png",
    subTitle: "Développeur Front-End",
    title: "Mon Portfolio Personnel",
    description:
      " Ce site a été conçu pour présenter mon profil professionnel de manière claire, moderne et interactive.",
    href_Project:
      "https://ctrl-code-bx8ai1e5z-noel-maries-projects.vercel.app/",
  },

  container2: {
    imageSrc: "/asset/Project_Affiche_2.png",
    subTitle: "Site Vitrine",
    title: "Black Pearl",
    description:
      " Ce site présente nos offres, notre vision, ainsi que les services que nous proposons.",
    href_Project:
      "https://blackpearl-bbshwutzz-noel-maries-projects.vercel.app",
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
    return (
      <div
        className={clsx(
          "border border-red-500 font-FiraCode flex flex-col",
          "h-[391px] w-full max-w-[330.58px] justify-center items-center text-center text-red-600"
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
        "h-auto w-full max-w-[330.58px]",
        "sm:h-[391px]"
      )}
    >
      {/* Partie 1 : Image */}
      <div className={clsx("relative h-[195px] w-full")}>
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-t-md"
          priority
          sizes="(max-width: 640px) 100vw, 330px"
        />
      </div>

      {/* Partie 2 : Sous-titre */}
      <div
        className={clsx(
          "h-[50px] flex items-center justify-center bg-Black_folio text-gray_folio border-y border-gray_folio",
          "text-sm sm:text-base px-2 text-center"
        )}
      >
        {item.subTitle}
      </div>

      {/* Partie 3 : Titre et description */}
      <div className={clsx("flex-1 p-4 flex flex-col gap-2")}>
        <h3 className={clsx("text-lg font-bold text-gray_folio")}>
          {item.title}
        </h3>
        <p className={clsx("text-gray_folio break-words text-sm sm:text-base")}>
          {item.description}
        </p>
      </div>

      {/* Partie 4 : Boutons avec liens */}
      <div className="flex flex-col  sm:flex-row gap-3 sm:gap-0 pb-6 justify-between px-6">
        {item.href_Project ? (
          <Button
            href={item.href_Project}
            target="_blank"
            rel="noopener noreferrer"
            variant="live"
            ClassName="w-full text-center sm:w-auto"
          >
            Live <span>{"<~>"}</span>
          </Button>
        ) : (
          <Button variant="live" disabled ClassName="w-full sm:w-auto">
            Live <span>{"<~>"}</span>
          </Button>
        )}

        <Button variant="cached" ClassName="w-full sm:w-auto">
          Cached <FaGreaterThanEqual />
        </Button>
      </div>
    </div>
  );
};
