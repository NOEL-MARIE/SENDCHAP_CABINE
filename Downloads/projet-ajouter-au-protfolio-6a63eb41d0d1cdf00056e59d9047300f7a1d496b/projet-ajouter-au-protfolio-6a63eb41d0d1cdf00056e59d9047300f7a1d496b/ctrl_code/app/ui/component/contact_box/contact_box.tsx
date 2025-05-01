"use client";
import clsx from "clsx";
import { Mail } from "lucide-react";

interface Contact_boxProps {
  className?: string;
  title?: string;
  description?: string;
}

export const Contact_box = ({
  className,
  title = "Email",
  description = "comoenoelmariefrancois@gmail.com",
}: Contact_boxProps) => {
  return (
    <div
      className={clsx(
        "w-[254px] h-[141px] bg-Black_folio shadow-lg p-4    justify-between  border border-gray_folio text-gray_folio font-FiraCode flex flex-col",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Mail className="text-primary_folio" size={20} />
        <h3 className="text-md text-white font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray_folio font-FleurDeLeah pt-2">
        {description}
      </p>
    </div>
  );
};
