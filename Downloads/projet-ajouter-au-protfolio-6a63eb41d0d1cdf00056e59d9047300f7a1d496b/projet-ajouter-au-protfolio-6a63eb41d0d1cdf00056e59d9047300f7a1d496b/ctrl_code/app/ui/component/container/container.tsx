"use client";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        " max-w-6xl w-[1024]  mx-auto  " // Centrage et flexibilité sur tous les écrans
      )}
    >
      {children}
    </div>
  );
};
