import { BoxInfo } from "@/app/ui/component/boxInfo/BoxInfo";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";
import React from "react";

export const Samll_App = () => {
  return (
    <div className=" w-[1023.74] h-[919]  flex flex-col  gap-2">
      <div className=" mb-6">
        <Hashtag varianthash="small project" />
      </div>
      <div className="w-[1023.74] h-[919]  flex flex-col md:flex-row flex-wrap  gap-2">
        <BoxInfo variant="container2" />
        <BoxInfo variant="container2" />
        <BoxInfo variant="container2" />
        <BoxInfo variant="container2" />
        <BoxInfo variant="container2" />
      </div>
    </div>
  );
};
