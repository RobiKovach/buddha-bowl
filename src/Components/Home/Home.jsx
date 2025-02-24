import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Specailities from "./Specailities/Specailities";
import Location from "../Location/Location";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Specailities />
      <Location />
      <Footer />
    </>
  );
}
