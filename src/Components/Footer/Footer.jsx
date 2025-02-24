import React from "react";
import "./Footer.scss";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <FooterTop />
        <FooterBottom />
      </section>
    </>
  );
}
