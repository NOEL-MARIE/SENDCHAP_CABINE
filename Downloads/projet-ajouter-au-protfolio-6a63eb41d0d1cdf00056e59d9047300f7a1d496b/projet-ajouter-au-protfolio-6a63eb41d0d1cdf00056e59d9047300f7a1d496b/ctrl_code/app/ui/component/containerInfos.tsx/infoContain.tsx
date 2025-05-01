import clsx from "clsx";

interface BoxProps {
  variantTitle?:
    | "Languages"
    | "siteWeb"
    | "Other"
    | "Tools"
    | "Frameworks"
; // Les différentes options de titre
  content?: string; // Le contenu à afficher dans la boîte
}

export const InfoContainer = ({
  variantTitle = "Languages", // Variante de titre par défaut
  content,
}: BoxProps) => {
  // Gestion du titre en fonction de la variante
  let title: string = "";
  switch (variantTitle) {
    case "Languages":
      title = "Languages";
      break;
    case "siteWeb":
      title = "Site Web";
      break;
    case "Other":
      title = "Other";
      break;
    case "Tools":
      title = "Tools";
      break;
      break;
    case "Frameworks":
      title = "Frameworks";
      break;
 // Titre par défaut
  }

  return (
    <div
      className={clsx(
        "border border-gray_folio text-white font-FiraCode mt-4 w-[300px] h-[250px] flex flex-col"
      )}
    >
      {/* Titre */}
      <div
        className={clsx(
          "flex items-center justify-center text-white h-[50px] "
        )}
      >
        {title}
      </div>
      {/* Barre de division */}
      <div className={clsx("h-[1px] bg-gray_folio")}></div>
      {/* Contenu */}
      {/* ajout de la class break-word pour faire revnir les mots a la ligne  */}
      <div className={clsx("flex-1 p-4   overflow-y-auto break-words text-white")}>
        {content}
      </div>
    </div>
  );
};
