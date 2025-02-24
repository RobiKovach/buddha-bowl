import React from "react";
import { NavLink } from "react-router-dom";
import "./Location.scss";
import Map from "./Map/Map";

const locationInfo = [
  {
    label: "Address",
    value: ["10 Old Bailey", "City of London, London", "EC4M 7NG"],
  },
  { label: "Phone", value: "+44 0723456789" },
  { label: "Email", value: "info@buddhabowl.com" },
];

const openingHours = [
  { day: "Monday", hours: "11:00 am - 2:30 pm" },
  { day: "Tuesday", hours: "11:00 am - 2:30 pm" },
  { day: "Wednesday", hours: "11:00 am - 2:30 pm" },
  { day: "Thursday", hours: "11:00 am - 2:30 pm" },
  { day: "Friday", hours: "11:00 am - 2:30 pm" },
  { day: "Saturday", hours: "closed" },
  { day: "Sunday", hours: "closed" },
];

export default function Location() {
  return (
    <section className="location">
      <div className="location__wrapper">
        <div className="location__title title">Location</div>
        <div className="location__content content-location">
          <div className="content-location__map">
            <Map />
          </div>
          <div className="content-location__info info-location">
            <div className="info-location__visit">
              <h3 className="info-location__title">Visit us</h3>
              <div className="info-location__items-visit">
                {locationInfo.map((item, index) => (
                  <div key={index} className="info-location__item">
                    {Array.isArray(item.value) ? (
                      item.value.map((line, i) => <p key={i}>{line}</p>)
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <NavLink to="/about" className="info-location__btn">
                Get directions
              </NavLink>
            </div>
            <div className="info-location__hours">
              <h3 className="info-location__title">Opening Hours</h3>
              <div className="info-location__items">
                {openingHours.map((item, index) => (
                  <p key={index} className="info-location__hours-item">
                    <span>{item.day}:</span> <span>{item.hours}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
