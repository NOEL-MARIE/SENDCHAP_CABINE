"use client";
import Link from "next/link";
// Importation des icônes nécessaires
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import clsx from "clsx";
import React, { useState } from "react";

interface Props {
  variantl?: "long";
  variantHr?: "hr";
  variant?: "ico";
}

export const Media = ({
  variantl = "long",
  variantHr = "hr",
  variant = "ico",
}: Props) => {
  let variantmedia: string = "";
  let variantofHr: string = "";
  let variantofico: string = "";

  // État pour gérer le survol des icônes
  const [hoverFace, setHoverFace] = useState<boolean>(false);
  const [hoverGit, setHoverGit] = useState<boolean>(false);
  const [hoverFig, setHoverFig] = useState<boolean>(false);

  if (variantl === "long") {
    variantmedia = "flex flex-col w-[32px] h-[250px] text-gray_folio";
  }

  if (variantHr === "hr") {
    variantofHr =
      "flex w-[1px] h-[191px] ml-[15.13325] items-center justify-center border border-gray_folio";
  }

  if (variant === "ico") {
    variantofico = "flex flex-col gap-2 mt-3  justify-center items-center";
  }

  return (
    <>
      <div className={clsx(variantmedia)}>
        <div className={clsx(variantofHr)}></div>
        <div className={clsx(variantofico)}>
          <span
            onMouseEnter={() => setHoverFace(true)}
            onMouseLeave={() => setHoverFace(false)}
            className={clsx(hoverFace ? "text-blue-500 cursor-pointer"  : "text-gray_folio")}
          >
            <FaFacebookF />
          </span>
          <span
            onMouseEnter={() => setHoverGit(true)}
            onMouseLeave={() => setHoverGit(false)}
            className={clsx(hoverGit ? "text-white cursor-pointer" : "text-gray_folio")}
          >
            <FaGithub />
          </span>
          <span
            onMouseEnter={() => setHoverFig(true)}
            onMouseLeave={() => setHoverFig(false)}
            className={clsx(hoverFig ? "text-primary_folio cursor-pointer" : "text-gray_folio")}
          >
            <IoLogoFigma />
          </span>
        </div>
      </div>
    </>
  );
};
