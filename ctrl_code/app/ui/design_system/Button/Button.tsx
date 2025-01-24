"use client";
import clsx from "clsx";

interface Props {
  variant?:
    | "cached"
    | "live"
    | "github"
    | "figma"
    | "read more"
    | "ico"
    | "send"
    | "Contact me";
  icon?: unknown;
  icoPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  // pour des styles par défaut pour nos Props

  variant = "live",

  disabled,

  children,
}: Props) => {
  // Déclaration des variables nécessaires pour les conditions
  let variantStyles: string = "";

  switch (variant) {
    case "cached":
      variantStyles =
        "  text-gray_folio hover:bg-gray_folio font-bold border border-gray_folio border-2 hover:text-white  hover:border-primary_folio px-[20px] flex gap-3 items-center text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "live":
      variantStyles =
        " text-gray_folio font-bold border border-gray_folio border-2 hover:text-white hover:bg-Hover_Primary_folio   border-primary_folio px-[20px] flex gap-2 items-center text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "github":
      variantStyles =
        "text-gray_folio font-bold border border-gray_folio border-2 hover:text-white hover:bg-Hover_Primary_folio   border-primary_folio px-[16px] text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "figma":
      variantStyles =
        "text-gray_folio font-bold border border-gray_folio border-2 hover:text-white hover:bg-Hover_Primary_folio   hover:border-primary_folio px-[16px] text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "read more":
      variantStyles =
        "text-gray_folio font-bold border border-gray_folio border-2 hover:text-white hover:bg-Hover_Primary_folio   hover:border-primary_folio px-[16px] text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "send":
      variantStyles =
        "text-gray_folio font-bold border border-gray_folio border-2 hover:text-white hover:bg-Hover_Primary_folio   hover:border-primary_folio px-[16px] text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "ico":
      variantStyles =
        "text-gray_folio font-bold border border-gray_folio border-2 hover:text-white hover:bg-Hover_Primary_folio   hover:border-primary_folio px-[16px] text-[13px] py-[8px]   hover:text-semiBold";
      break;
    case "Contact me":
      variantStyles =
        " text-gray_folio font-bold border  border-2 hover:text-white hover:bg-Hover_Primary_folio   border-primary_folio px-[20px] flex gap-2 items-center text-[13px] py-[8px]   hover:text-semiBold";
      break;
  }

  return (
    <button
      type="button"
      className={clsx(variantStyles)}
      onClick={() => alert("is clicked")}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
