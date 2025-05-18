"use client";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
  ClassName?: string;
  children?: React.ReactNode;
  href?: string; // Ajout de la prop href pour gérer les liens
  target?: string; // Pour ouvrir dans un nouvel onglet si besoin
  rel?: string; // Sécurité pour les liens externes
  onClick?: () => void; // Pour gérer un clic personnalisé
}

export const Button = ({
  variant = "live",
  disabled,
  children,
  ClassName,
  href,
  target,
  rel,
  onClick,
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(buttonRef.current, {
        scale: 1.03,
        duration: 1.2,
        ease: "power1.inOut",
      }).to(buttonRef.current, {
        scale: 1,
        duration: 1.2,
        ease: "power1.inOut",
      });
    }
  }, []);

  let variantStyles: string = "";

  switch (variant) {
    case "cached":
      variantStyles =
        "text-gray_folio w-fit hover:bg-gray_folio font-bold border border-gray_folio border-1 hover:text-white hover:border-primary_folio px-[20px] flex gap-3 items-center text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "live":
      variantStyles =
        "text-gray_folio w-fit font-bold border border-gray_folio border-1 hover:text-white hover:bg-Hover_Primary_folio border-primary_folio px-[20px] flex gap-2 items-center text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "github":
      variantStyles =
        "text-gray_folio w-fit font-bold border border-gray_folio border-1 hover:text-white hover:bg-Hover_Primary_folio border-primary_folio px-[16px] text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "figma":
      variantStyles =
        "text-gray_folio w-fit font-bold border border-gray_folio border-1 hover:text-white hover:bg-Hover_Primary_folio hover:border-primary_folio px-[16px] text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "read more":
      variantStyles =
        "text-gray_folio w-fit font-bold border border-primary_folio border-1 hover:text-white hover:bg-Hover_Primary_folio hover:border-primary_folio px-[16px] text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "send":
      variantStyles =
        "text-gray_folio w-fit font-bold border border-gray_folio border-1 hover:text-white hover:bg-Hover_Primary_folio hover:border-primary_folio px-[16px] text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "ico":
      variantStyles =
        "text-gray_folio font-bold border border-gray_folio border-1 hover:text-white hover:bg-Hover_Primary_folio hover:border-primary_folio px-[16px] text-[13px] py-[8px] hover:text-semiBold";
      break;
    case "Contact me":
      variantStyles =
        "text-gray_folio font-bold border border-1 hover:text-white hover:bg-Hover_Primary_folio border-primary_folio px-[20px] flex gap-2 items-center text-[13px] py-[8px] hover:text-semiBold";
      break;
  }

  // Si href est défini, on rend un lien <a>, sinon un <button>
  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={clsx(variantStyles, ClassName, disabled && "pointer-events-none opacity-50")}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type="button"
      className={clsx(variantStyles, ClassName)}
      disabled={disabled}
      onClick={onClick ?? (() => alert("is clicked"))}
    >
      {children}
    </button>
  );
};
