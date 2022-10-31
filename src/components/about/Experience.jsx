import React from "react";

const experienceContent = [
  {
    year: " Feb 2022 - Present",
    position: " Junior Front-End Developer",
    compnayName: "FatCoderz",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "May 2019 - June 2020",
    position: " Junior Front-End Developer ",
    compnayName: "XpertPoin8",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "   Feb 2019 - April 2019",
    position: " Intern",
    compnayName: "Digital Poin8",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
        
        </li>
      ))}
    </ul>
  );
};

export default Experience;
