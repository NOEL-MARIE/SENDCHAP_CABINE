"use client"
import { useState, useEffect } from "react";
import Layout from "./ui/component/layout/layout";
import { LandingPageContainer } from "./ui/modules/LandingPage/landing-page.contaier";
import Loader from "./component/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Affiche le loader pendant 3 secondes
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-Black_folio">
        <Loader  />
      </div>
    );
  }

  return (
    <div className="bg-Black_folio1">
      <Layout ClassName="bg-Black_folio w-screen h-screen">
        <LandingPageContainer />
      </Layout>
    </div>
  );
}
