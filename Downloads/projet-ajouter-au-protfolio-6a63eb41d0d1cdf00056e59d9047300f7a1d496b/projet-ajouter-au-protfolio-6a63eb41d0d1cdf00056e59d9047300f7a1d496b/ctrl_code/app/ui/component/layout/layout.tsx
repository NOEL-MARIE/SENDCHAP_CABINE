import Navbar from "@/app/component/NavBar";
import React from "react";
import Footer from "../footer/footer";
import { Container } from "../container/container";

interface Props {
  children: React.ReactNode;
  ClassName?: string;
}

export default function Layout({ children }: Props) {
  return (
    <>
   
      <Navbar />
      <Container className="    bg-Black_folio">{children}</Container>
      <Footer />
    </>
  );
}
