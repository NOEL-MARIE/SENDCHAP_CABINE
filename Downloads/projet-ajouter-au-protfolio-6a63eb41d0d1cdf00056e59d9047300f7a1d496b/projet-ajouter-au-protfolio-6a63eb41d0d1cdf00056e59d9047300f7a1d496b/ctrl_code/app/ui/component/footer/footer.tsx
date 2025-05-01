import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaFilePowerpoint,
} from "react-icons/fa";
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiJavascript,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";


export default function Footer() {
  return (
    <>
      <footer className="bg-Black_folio text-white hover:border-t-8 border-t-2 hover:border-primary_folio hover:animate-pulse p-6">
        <div className="container mx-auto flex flex-col md:text-left lg:text-left justify-between items-center">
          <div className="text-center md:text-left lg:text-left mb-4 md:mb-0">
            <p>Web Designer and Front-End Developer</p>
          </div>
          <div className="flex justify-center gap-6 mb-4 md:mb-0">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-pink-500" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-blue-700" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl hover:text-gray-500" />
            </Link>
            <Link href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-xl hover:text-blue-500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiReact className="text-3xl animate-spin transition-all duration-700 hover:text-blue-600" />
          </Link>
          <Link
            href="https://vuejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiVuedotjs className="text-3xl hover:text-green-600" />
          </Link>
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNextdotjs className="text-3xl hover:text-black" />
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiJavascript className="text-3xl hover:text-yellow-600" />
          </Link>

          {/* Icônes des logiciels Adobe */}
          <Link
            href="https://www.adobe.com/products/photoshop.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAdobephotoshop className="text-3xl hover:text-blue-600" />
          </Link>
          <Link
            href="https://www.adobe.com/products/illustrator.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAdobeillustrator className="text-3xl hover:text-orange-600" />
          </Link>
          <Link
            href="https://www.adobe.com/products/premiere.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAdobepremierepro className="text-3xl hover:text-red-600" />
          </Link>
          <Link
            href="https://www.adobe.com/products/aftereffects.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAdobeaftereffects className="text-3xl hover:text-purple-600" />
          </Link>

          {/* Icônes de Microsoft */}
          <Link
            href="https://www.microsoft.com/en-us/microsoft-365/word"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiMicrosoftWordLogoFill className="text-3xl hover:text-blue-700" />
          </Link>
          <Link
            href="https://www.microsoft.com/en-us/microsoft-365/powerpoint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePowerpoint className="text-3xl hover:text-red-600" />
          </Link>
        </div>

        <div className="bg-Black_folio text-white text-center py-2 mt-4">
          <p>
            &copy; 2025 DE GONZAGUE NOËL-MARIE FRANÇOIS. <span className="text-primary_folio underline decoration-dotted">Tous droits réservés.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
