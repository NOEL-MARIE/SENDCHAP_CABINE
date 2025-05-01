import Layout from "../ui/component/layout/layout"
import { Projectview } from "../ui/modules/special_page/component/project/Project";


// Composant principal de la page d'accueil
export default function Project() {
  return (
    <>
      <div className="bg-Black_folio">
        <Layout ClassName="bg-Black_folio w-screen h-screen">
          <Projectview />
        </Layout>
      </div>
    </>
  );
}
