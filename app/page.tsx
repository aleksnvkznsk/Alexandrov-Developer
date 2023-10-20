"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Bond from "@/components/bond";

import Home from "@/components/home";
import Projects from "@/components/projects";
import Contacts from "@/components/contacts";

export default function Page() {
  return (
    <>
      <Header />
      <NavBar />
      <Bond />
      <Home />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
