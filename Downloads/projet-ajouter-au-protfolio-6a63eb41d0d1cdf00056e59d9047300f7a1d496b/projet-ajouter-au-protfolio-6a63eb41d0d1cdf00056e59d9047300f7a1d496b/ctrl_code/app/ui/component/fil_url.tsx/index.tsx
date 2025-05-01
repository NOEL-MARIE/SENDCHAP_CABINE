"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

// Composant Slash (ajout de className personnalisable)
const Slash = ({ className }: { className?: string }) => (
  <span className={clsx(className, "text-primary_folio text-3xl")}>/</span>
);

// Props avec className et personnalisation du séparateur
type FilUrlProps = {
  className?: string;
  slashClassName?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
};

export const FilUrl = ({
  className,
  slashClassName,
  linkClassName,
  activeLinkClassName,
}: FilUrlProps) => {
  const pathname = usePathname();
  let segments = pathname.split("/").filter(Boolean);
  segments = ["accueil", ...segments];
  const lastIndex = segments.length - 1;

  return (
    <div className={clsx("flex items-center text-2xl", className)}>
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center">
          <Slash className={slashClassName} />
          <Link
            href={
              index === 0 ? "/" : "/" + segments.slice(1, index + 1).join("/")
            }
          >
            <span
              className={clsx(
                "capitalize font-FiraCode ml-2",
                linkClassName,
                index !== lastIndex
                  ? "text-primary_folio"
                  : clsx(
                      "text-gray_folio hover:text-primary_folio",
                      activeLinkClassName
                    )
              )}
            >
              {segment === "accueil" ? "Accueil" : segment}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};
