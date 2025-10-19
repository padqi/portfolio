import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Noor" },
  { meta: "last name", metaInfo: "Hassan" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Jhelum, PB" },
  { meta: "phone", metaInfo: "+92 313 5643167" },
  { meta: "Email", metaInfo: "hassansarvani@gmail.com" },
  { meta: "Skype", metaInfo: " hassansarvani" },
  { meta: "langages", metaInfo: " English, Urdu" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
