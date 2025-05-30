"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Media } from "../ui/design_system/media/media";
import CursorFollower from "../ui/CursorFollower";
import ThemeToggle from "../ui/ThemeToggle";

// Définition du type partagé pour varianthash
type VarianthashType =
  | "home"
  | "about-me"
  | "works"
  | "contacts"
  | "all-media"
  | "my-fun-facts"
  | "small-projects"
  | "Project_View"
  | "complete-apps"
  | "project-view"; // Ajouté si vous en avez besoin

interface NavbarHashtagsProps {
  varianthash?: VarianthashType;
}

// Composant NavbarHashtags défini dans le même fichier
const NavbarHashtags = ({ varianthash = "home" }: NavbarHashtagsProps) => {
  const pathname = usePathname() ?? "/";

  const displayTextMap: Record<VarianthashType, string> = {
    home: "home",
    "about-me": "about me",
    works: "works",
    contacts: "contacts",
    "all-media": "all media",
    "my-fun-facts": "my fun facts",
    "small-projects": "small projects",
    Project_View: "project view",
    "complete-apps": "complete apps",
    "project-view": "project view",
  };

  const normalizedPathname = pathname.toLowerCase();
  const normalizedHash =
    varianthash === "home"
      ? "/"
      : `/${varianthash.toLowerCase().replace(/_/g, "-")}`;

  const isActive =
    normalizedPathname === normalizedHash ||
    normalizedPathname.startsWith(normalizedHash + "/");

  const displayText = displayTextMap[varianthash];

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

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#navbarWrapper")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      window.location.href = selectedLanguage;
    }
  };

  const navLinks: { href: string; varianthash: VarianthashType }[] = [
    { href: "/", varianthash: "home" },
    { href: "/Project", varianthash: "works" },
    { href: "/AboutMe", varianthash: "about-me" },
    { href: "/Contact", varianthash: "contacts" },
    { href: "/Project_Carrousel", varianthash: "Project_View" },
  ];

  const navbarClasses = `
    fixed top-0 left-0 w-full z-[9999]
    transition-all duration-500
    ${isScrolled ? "bg-Black_folio/95 py-4 shadow-lg" : "bg-Black_folio py-6"}
    backdrop-blur-sm
    isolation-isolate
    will-change-transform
  `;

  const isLinkActive = (href: string, currentPath: string): boolean => {
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  return (
    <>
      <div className="hidden md:flex">
        <CursorFollower />
      </div>
      <Media className="ml-40 z-[10000] fixed top-0 left-0 isolation-isolate pointer-events-none" />

      <nav
        id="navbarWrapper"
        className={navbarClasses}
        style={{ transform: "translateZ(0)" }}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-6xl BGFOLI mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          <div className="flex gap-3 items-center">
            <span className="text-primary_folio font-FcMedium text-lg sm:text-xl">Mr.</span>
            <Image src="/asset/CI.svg" alt="ci logo" width={24} height={24} priority />
          </div>

          <div className="hidden md:flex gap-10 items-center text-base sm:text-lg lg:text-xl">
            {navLinks.map(({ href, varianthash }) => {
              const isActive = isLinkActive(href, pathname);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary_folio after:transition-all after:duration-500 hover:text-white ${
                    isActive ? "text-white after:w-full" : "text-gray_folio after:w-0 hover:after:w-full"
                  }`}
                >
                  <NavbarHashtags varianthash={varianthash} />
                </Link>
              );
            })}
          </div>

          <ThemeToggle />

          <div className="flex items-center gap-4">
            <select
              className="hidden md:block py-1 px-2 bg-Black_folio text-gray_folio hover:cursor-pointer border border-transparent hover:border-gray-600 rounded transition-colors"
              onChange={handleLanguageChange}
              aria-label="Changer la langue"
            >
              <option value="/en">EN</option>
              <option value="/ru">RU</option>
              <option value="/ua">UA</option>
            </select>

            <button
              className="md:hidden text-white bg-Black_folio1 focus:outline-none focus:ring-2 focus:ring-primary_folio rounded"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 bg-Black_folio backdrop-blur-sm transition-transform duration-500 z-[9998] flex flex-col ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!isOpen}
          style={{ isolation: "isolate", willChange: "transform" }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-primary_folio rounded"
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col bg-Black_folio items-center gap-8 pt-20 text-2xl">
            {navLinks.map(({ href, varianthash }) => {
              const isActive = isLinkActive(href, pathname);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary_folio after:transition-all after:duration-500 hover:text-primary_folio ${
                    isActive ? "text-white after:w-full" : "text-gray_folio after:w-0 hover:after:w-full"
                  }`}
                >
                  <NavbarHashtags varianthash={varianthash} />
                </Link>
              );
            })}
            <select
              className="mt-8 py-2 px-4 bg-Black_folio mb-6 text-gray_folio border border-gray-600 rounded-md cursor-pointer hover:border-primary_folio transition-colors w-40 text-center"
              onChange={handleLanguageChange}
              aria-label="Changer la langue"
            >
              <option value="/en">EN</option>
              <option value="/ru">RU</option>
              <option value="/ua">UA</option>
            </select>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
