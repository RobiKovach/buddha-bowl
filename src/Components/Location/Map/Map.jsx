import React from "react";
import "./Map.scss";

export default function Map() {
  return (
    <>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9152415666954!2d-0.10464702352960778!3d51.51477097181507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604acd2aaaeff%3A0xbf263d0640e5e13e!2zMTAgT2xkIEJhaWxleSwgQ2l0eSBvZiBMb25kb24sIExvbmRvbiBFQzRNIDdORywg0JLQtdC70LjQutCwINCR0YDQuNGC0LDQvdGW0Y8!5e0!3m2!1suk!2sde!4v1740388253532!5m2!1suk!2sde"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
