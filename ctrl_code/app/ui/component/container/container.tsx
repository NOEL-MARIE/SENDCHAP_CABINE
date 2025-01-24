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
        "w-screen h-full px-5 lg:px-1O py-10 mx-auto space-y-5  font-FiraCode"
      )}
    >
      {" "}
      {children}
    </div>
  );
};
