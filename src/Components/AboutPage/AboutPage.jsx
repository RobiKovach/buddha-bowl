import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Location from "../Location/Location";
import AboutBanner from "./AboutBanner/AboutBanner";

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutBanner />
      <Location />
      <Footer />
    </>
  );
}
