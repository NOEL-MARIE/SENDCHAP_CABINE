import clsx from "clsx";
import Image from "next/image";
import {
  FaSnowflake,
  FaBiking,
  FaPizzaSlice,
  FaGlobeAfrica,
  FaFilm,
  FaSchool,
  FaUserSlash,
} from "react-icons/fa";
import { Hashtag } from "../hashtag/Hashtag";

interface FunFactItem {
  icon: React.ReactNode;
  description: string;
  width: number;
  height: number;
}

const funFacts: FunFactItem[] = [
  {
    icon: <FaSnowflake className="text-primary_folio" />,
    description: "I like winter more than summer",
    width: 304,
    height: 37,
  },
  {
    icon: <FaBiking className="text-primary_folio" />,
    description: "I often bike with my friends.",
    width: 285,
    height: 37,
  },
  {
    icon: <FaPizzaSlice className="text-primary_folio" />,
    description: "I like pasta and pizza",
    width: 228,
    height: 37,
  },
  {
    icon: <FaGlobeAfrica className="text-primary_folio" />,
    description: "I was in Egypt, Poland and Turkey",
    width: 333,
    height: 37,
  },
  {
    icon: <FaFilm className="text-primary_folio" />,
    description: "My favorite movie is The Green Mile",
    width: 352,
    height: 37,
  },
  {
    icon: <FaSchool className="text-primary_folio" />,
    description: "I am still in school",
    width: 208,
    height: 37,
  },
  {
    icon: <FaUserSlash className="text-primary_folio" />,
    description: "I don’t have any siblings",
    width: 256,
    height: 37,
  },
];

export const FunFacts = () => {
  const highlightWords = (text: string) => {
    const words = text.split(" ");
    return words.map((word, wordIndex) => {
      const isHighlighted =
        word.includes("pasta") ||
        word.includes("pizza") ||
        word.includes("Egypt") ||
        word.includes("Poland") ||
        word.includes("Turkey") ||
        word.includes("Green") ||
        word.includes("Mile");

      return (
        <span key={wordIndex} className={isHighlighted ? "text-white" : ""}>
          {word}{" "}
        </span>
      );
    });
  };

  const groupedFacts = [];
  for (let i = 0; i < funFacts.length; i += 2) {
    groupedFacts.push(funFacts.slice(i, i + 2));
  }

  return (
    <>
      <Hashtag varianthash="my-fun-facts" className="mt-32 mb-8" />
      <div className="flex flex-row justify-between">
        <div
          className={clsx(
            "w-[639px] mb-24 flex flex-col",
            "font-FiraCode text-gray_folio border border-[#ABB2BF] p-1",
            "transform transition-all duration-500 ease-in-out hover:scale-105"
          )}
          style={{ height: "185px" }}
        >
          {/* Groupes de 2 éléments */}
          <div className="space-y-2 mb-2 overflow-y-auto">
            {groupedFacts.slice(0, -1).map((group, groupIndex) => (
              <div key={groupIndex} className="flex gap-2">
                {group.map((fact, factIndex) => (
                  <div
                    key={`${groupIndex}-${factIndex}`}
                    className="flex items-center gap-2 border border-[#ABB2BF] px-3 py-2 transition-transform duration-500 ease-in-out transform hover:translate-x-2"
                    style={{
                      width: `${fact.width}px`,
                      height: `${fact.height}px`,
                      minWidth: `${fact.width}px`,
                    }}
                  >
                    <div className="text-xs">{fact.icon}</div>
                    <div className="text-sm">
                      {highlightWords(fact.description)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dernier élément isolé en bas */}
          <div className="mt-0">
            <div className="flex gap-2">
              {groupedFacts[groupedFacts.length - 1].map((fact, factIndex) => (
                <div
                  key={`last-${factIndex}`}
                  className="flex items-center gap-2 border border-[#ABB2BF] px-3 py-2 transition-transform duration-500 ease-in-out transform hover:translate-x-2"
                  style={{
                    width: `${fact.width}px`,
                    height: `${fact.height}px`,
                    minWidth: `${fact.width}px`,
                  }}
                >
                  <div className="text-xs">{fact.icon}</div>
                  <div className="text-sm">
                    {highlightWords(fact.description)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/asset/Svg/Group 53.svg"
            width={196}
            height={177}
            alt="groupe d'image"
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </>
  );
};
