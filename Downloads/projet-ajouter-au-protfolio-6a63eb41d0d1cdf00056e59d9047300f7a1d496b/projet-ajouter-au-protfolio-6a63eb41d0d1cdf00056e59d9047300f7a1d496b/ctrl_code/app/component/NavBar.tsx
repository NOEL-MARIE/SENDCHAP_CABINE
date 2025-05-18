"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarHashtags } from "../ui/component/navlink/navLinks";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Media } from "../ui/design_system/media/media";
import CursorFollower from "../ui/CursorFollower";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet de scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#navbarWrapper")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      window.location.href = selectedLanguage;
    }
  };

  const navLinks = [
    { href: "/", varianthash: "home" },
    { href: "/Project", varianthash: "works" },
    { href: "/AboutMe", varianthash: "about-me" },
    { href: "/Contact", varianthash: "contacts" },
    { href: "/Project_Carrousel", varianthash: "Project_View" },
  ] as const;

  const navbarClasses = `
    fixed top-0 left-0 w-full z-[9999]
    transition-all duration-500
    ${isScrolled ? "bg-Black_folio/95 py-4 shadow-lg" : "bg-Black_folio py-6"}
    backdrop-blur-sm
    isolation-isolate
    will-change-transform
  `;

  return (
    <>
      <CursorFollower />
      {/* Media composant, fixé */}
      {/* <Image src="/asset/Svg/Dots.svg" alt="Dots.svg" className="z-0" width={50} height={50}/> */}
      <Media className="ml-40 z-[10000] fixed top-0 left-0 isolation-isolate pointer-events-none" />

      <nav
        id="navbarWrapper"
        className={navbarClasses}
        style={{ transform: "translateZ(0)" }}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          {/* Logo */}
          <div className="flex gap-3 items-center">
            <span className="text-primary_folio font-FcMedium text-lg sm:text-xl">
              Mr.
            </span>
            <Image
              src="/asset/CI.svg"
              alt="ci logo"
              width={24}
              height={24}
              priority
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-10 items-center text-base sm:text-lg lg:text-xl">
            {navLinks.map(({ href, varianthash }) => {
              const isActive = pathname === href || pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary_folio after:transition-all after:duration-500 hover:text-white ${
                    isActive
                      ? "text-white after:w-full"
                      : "text-gray_folio after:w-0 hover:after:w-full"
                  }`}
                >
                  <NavbarHashtags varianthash={varianthash} />
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
          {/* Contrôles droite */}
          <div className="flex items-center gap-4">
            {/* Sélecteur langue desktop */}
            <select
              className="hidden md:block py-1 px-2 bg-Black_folio text-gray_folio hover:cursor-pointer border border-transparent hover:border-gray-600 rounded transition-colors"
              onChange={handleLanguageChange}
              aria-label="Changer la langue"
            >
              <option value="/en">EN</option>
              <option value="/ru">RU</option>
              <option value="/ua">UA</option>
            </select>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary_folio rounded"
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

        {/* Menu Mobile */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 bg-Black_folio/95 backdrop-blur-sm transition-transform duration-500 z-[9998] flex flex-col ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!isOpen}
          style={{
            isolation: "isolate",
            willChange: "transform",
          }}
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
          <nav className="flex flex-col items-center gap-8 mt-20 text-2xl">
            {navLinks.map(({ href, varianthash }) => {
              const isActive = pathname === href || pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary_folio after:transition-all after:duration-500 hover:text-primary_folio ${
                    isActive
                      ? "text-white after:w-full"
                      : "text-gray_folio after:w-0 hover:after:w-full"
                  }`}
                >
                  <NavbarHashtags varianthash={varianthash} />
                </Link>
              );
            })}
            <select
              className="mt-8 py-2 px-4 bg-Black_folio text-gray_folio border border-gray-600 rounded-md cursor-pointer hover:border-primary_folio transition-colors w-40 text-center"
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
