"use client";
import { BoxFeature } from "@/app/ui/component/boxInfo/BoxFeature/BoxFeature";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";
import React from "react";

export const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      items: ["Firebase Firestore", "Supabase", "MongoDB"]
    },
    {
      title: "Tools",
      items: ["Git", "Figma", "VS Code", "Postman"]
    },
    {
      title: "Frameworks",
      items: ["Vue.js", "Next.js", "React.js"]
    },
    {
      title: "Other",
      items: ["ShadCN", "Tailwind CSS", "Vite", "Node.js"]
    }
  ];

  return (
    <section id="skills" className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Hashtag 
          varianthash="skills" 
          className="mt-32 mb-12 text-center"
        />

        <div className="md:grid flex   md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Colonne principale */}
          <BoxFeature
            title={skillsData[0].title}
            description={skillsData[0].items.join(" • ")}
            className="md:col-span-2 lg:col-span-1"
          />

          {/* Groupement des deux colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
            <div className="space-y-6">
              <BoxFeature
                title={skillsData[1].title}
                description={skillsData[1].items.join(" • ")}
              />
              <BoxFeature
                title={skillsData[2].title}
                description={skillsData[2].items.join(" • ")}
              />
            </div>

            <div className="space-y-6">
              <BoxFeature
                title={skillsData[3].title}
                description={skillsData[3].items.join(" • ")}
              />
              <BoxFeature
                title={skillsData[4].title}
                description={skillsData[4].items.join(" • ")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
