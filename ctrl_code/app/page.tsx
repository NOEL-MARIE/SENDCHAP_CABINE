//Importation des icones necessaires
import { FaGreaterThanEqual } from "react-icons/fa6";
import { FaFaceSmileWink } from "react-icons/fa6";
// Importation des composants nécessaires
import Seo from "./ui/component/Seo/Seo";
import { Button } from "./ui/design_system/Button/Button";
import { Media } from "./ui/design_system/media/media";
import { Container } from "./ui/component/container/container";
import { Hashtag } from "./ui/component/hashtag/Hashtag";
import { Banner_Container } from "./ui/component/banner_container/banner_container";
import { InfoContainer } from "./ui/component/containerInfos.tsx/infoContain";
// Composant principal de la page d'accueil
export default function Home() {
  return (
    <>
      <Container className=" w-full h-screen ">
        <Seo title="Mon Portfolio" description="Mon portfolio personnel" />
        <div className="  text-black items-center justify-center flex">
          Le Design System
        </div>
        <div className="   ">
          <div className=" flex flex-row gap-9 p-3 border border-gray_folio ">
            {/* <Authentication /> */}
            <p className=" text-black">List Des Bouttons</p>
            <Button variant="cached">
              {" "}
              Cached <FaGreaterThanEqual />
            </Button>
            <Button>
              {" "}
              Live <span>{"<~>"}</span>
            </Button>
            <Button variant="github">
              {" "}
              Github <span>{"<~>"}</span>
            </Button>
            <Button variant="figma"> Figma </Button>
            <Button variant="read more"> Read more </Button>
            <Button variant="Contact me">
              {" "}
              Contact me <FaFaceSmileWink className="m-1" />{" "}
            </Button>
          </div>
          <div className=" flex flex-row items-center w-96 h-72 justify-center gap-9 p-10  m-5 mb-6 border border-gray_folio">
            <p className=" text-black capitalize">les bouttons des medias</p>

            <Media variant={"ico"} />
          </div>
          <p>Banner Container</p>
          <div className="border border-gray_folio">
            <Banner_Container className=" ">
              <Hashtag varianthash={"projectSimple"} />{" "}
            </Banner_Container>
          </div>
          <div>
             < InfoContainer variantTitle="Other"/>
          </div>
        </div>
      </Container>
    </>
  );
}

