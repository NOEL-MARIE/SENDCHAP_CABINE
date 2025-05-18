import { BoxInfo } from "@/app/ui/component/boxInfo/BoxInfo";
import { Hashtag } from "@/app/ui/component/hashtag/Hashtag";
import React from "react";

export const App_Completed = () => {
  return (
    <div>
      <div>
        {" "}
        <div className=" mb-14">
          <Hashtag varianthash="complete-app" className="flex"/>
        </div>
      </div>
      <div className=" w-[1023.74] h-[919] mb-14 flex flex-row flex-wrap gap-2">
        <BoxInfo variant="container1" />
        <BoxInfo variant="container2" />
        <BoxInfo variant="container3" />

      </div>
    </div>
  );
};
