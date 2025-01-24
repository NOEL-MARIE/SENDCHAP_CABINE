import clsx from "clsx";

interface Props {
  varianthash?:
    | "hashtag"
    | "projects"
    | "projectSimple"
    | "skills"
    | "aboute_me"
    | "small_project"
    | "contacts"
    | "my-fun-facts";

  variantHr?: "hr";
}

export const Hashtag = ({
  varianthash = "hashtag",
  variantHr = "hr",
  displayText = "projects",
}: Props) => {
  // La barre horizontale
  let variantofHr: string = "";
  if (variantHr === "hr") {
    variantofHr =
      "flex w-[191px] h-[0.5px] items-center justify-center border border-gray_folio";
  }

  // Gestion du texte qui doit s'afficher

  switch (varianthash) {
    case "projects":
      displayText = "projects ";
      break;
    case "projectSimple":
      displayText = "projectSimple";
      break;
    case "skills":
      displayText = "skills";
      break;
    case "aboute_me":
      displayText = "about_me";
      break;
    case "small_project":
      displayText = "small_project ";
      break;
    case "contacts":
      displayText = "contacts";
      break;
    case "hashtag":
    default:
      displayText = "projects"; // Affiche `projects` par défaut pour "hashtag"
      break;
      case "hashtag":
          displayText = "my-fun-facts"; // Affiche `projects` par défaut pour "hashtag"
          break;
  }

  // Gestion des styles pour le hashtag
  let varhash: string =
    " font-FiraCode font-bold text-primary_folio text-[16px] ";
  if (varianthash === "hashtag") {
    varhash += " text-primary_folio"; // Style spécifique pour "hashtag"
  } else {
    varhash += " text-gray_folio"; // Style par défaut pour les autres
  }

  return (
    <div className="flex ">
      <div className={clsx(varhash, " ml-3 items-center flex ")}>#</div>
      <div className="items-center flex font-FiraCode  ">{displayText}</div>
      <div className={clsx(variantofHr, "mt-[20.33335] ml-5 border border-primary_folio")}></div>
    </div>
  );
};
