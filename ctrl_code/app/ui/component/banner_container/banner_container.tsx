"use client";
import clsx from "clsx";
interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Banner_Container = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "  w-[701px] h-[42px] flex flex-row gap-4 font-FiraCode"
      )}
    >
      {" "}
      {children}
    </div>
  );
};
