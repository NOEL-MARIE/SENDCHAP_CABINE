"use client";

import { IoLogoFigma } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import clsx from "clsx";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  variantl?: "long";
  variantHr?: "hr";
  variant?: "ico";
  className?: string;
}

export const Media = ({
  variantl = "long",
  variantHr = "hr",
  variant = "ico",
  className,
}: Props) => {
  let variantmedia: string = "";
  let variantofHr: string = "";
  let variantofico: string = "";

  // État pour gérer le survol des icônes
  const [hoverFace, setHoverFace] = useState<boolean>(false);
  const [hoverGit, setHoverGit] = useState<boolean>(false);
  const [hoverFig, setHoverFig] = useState<boolean>(false);

  if (variantl === "long") {
    variantmedia = "flex flex-col items-center z-50 text-gray_folio";
  }

  if (variantHr === "hr") {
    variantofHr = "w-[1px] h-[191px] border border-gray_folio";
  }

  if (variant === "ico") {
    variantofico = "flex flex-col gap-2 mt-3 justify-center items-center";
  }

  return (
    <>
    <div className={clsx(variantmedia, className)}>
      <div className={clsx(variantofHr)}></div>
      <div className={clsx(variantofico)}>
        <Link href={"https://facebook.com"}
          onMouseEnter={() => setHoverFace(true)}
          onMouseLeave={() => setHoverFace(false)}
          className={clsx(
            hoverFace ? "text-blue-500 cursor-pointer" : "text-gray_folio"
          )}
        >
          <FaFacebookF size={20} />
        </Link>
        <Link
        href={"https://github.com"}
          onMouseEnter={() => setHoverGit(true)}
          onMouseLeave={() => setHoverGit(false)}
          className={clsx(
            hoverGit ? "text-white cursor-pointer" : "text-gray_folio"
          )}
        >
          <Image
            src={"/asset/Images/git_hub.gif"}
            alt="git hub image"
            width={32}
            height={32}
          />
        </Link>
        <Link
        href={"https://figma.com"}
          onMouseEnter={() => setHoverFig(true)}
          onMouseLeave={() => setHoverFig(false)}
          className={clsx(
            hoverFig ? "text-primary_folio cursor-pointer" : "text-gray_folio"
          )}
        >
          <IoLogoFigma size={24} />
        </Link>
      </div>
    </div>
    </>
  );
};
