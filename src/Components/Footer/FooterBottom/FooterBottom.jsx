import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterBottom() {
  const socialLinks = [
    { name: "X", icon: "x.svg", url: "https://twitter.com" },
    { name: "Instagram", icon: "insta.svg", url: "https://instagram.com" },
    { name: "Pinterest", icon: "pinterest.svg", url: "https://pinterest.com" },
    { name: "LinkedIn", icon: "linkedin.svg", url: "https://linkedin.com" },
    { name: "TikTok", icon: "tiktok.svg", url: "https://tiktok.com" },
    { name: "YouTube", icon: "youtube.svg", url: "https://youtube.com" },
  ];

  return (
    <div className="footer-bottom__wrapper bottom-footer">
      <div className="bottom-footer__item">
        © 2024 Robert Kovach, Inc. All rights reserved
      </div>
      <div className="bottom-footer__socials">
        {socialLinks.map((social, index) => (
          <NavLink
            key={index}
            to={social.url}
            className="bottom-footer__social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/socials/${social.icon}`}
              alt={`${social.name} icon`}
              className="bottom-footer__social-icon"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
