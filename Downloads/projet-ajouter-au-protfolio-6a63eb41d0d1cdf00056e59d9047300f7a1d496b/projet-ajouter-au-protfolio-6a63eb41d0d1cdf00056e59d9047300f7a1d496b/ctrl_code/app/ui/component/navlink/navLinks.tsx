"use client";
import { usePathname } from "next/navigation";

interface Props {
  varianthash?:
    | "home"
    | "about-me"
    | "works"
    | "contacts"
    | "all-media"
    | "my-fun-facts"
    | "small-projects"
    | "Project_View"
    | "complete-apps";
}

// Dictionnaire des labels lisibles
const displayTextMap: Record<NonNullable<Props["varianthash"]>, string> = {
  home: "home",
  "about-me": "about me",
  works: "works",
  contacts: "contacts",
  "all-media": "all media",
  "my-fun-facts": "my fun facts",
  "small-projects": "small projects",
  Project_View: "project view",
  "complete-apps": "complete apps",
};

export const NavbarHashtags = ({ varianthash = "home" }: Props) => {
  const pathname = usePathname() ?? "/";

  const displayText = displayTextMap[varianthash];

  const normalizedPathname = pathname.toLowerCase();
  const normalizedHash =
    varianthash === "home" ? "/" : `/${varianthash.toLowerCase()}`;

  const isActive =
    normalizedPathname === normalizedHash ||
    normalizedPathname.startsWith(normalizedHash + "/");

  return (
    <div className="flex space-x-4 items-center">
      <div
        className={`flex items-center font-FiraCode capitalize transition-colors duration-300 ${
          isActive
            ? "text-primary_folio"
            : "text-gray_folio hover:text-primary_folio"
        }`}
      >
        <span className="font-FleurDeLeah font-bold text-[20px]">#</span>
        <span>{displayText}</span>
      </div>
    </div>
  );
};
