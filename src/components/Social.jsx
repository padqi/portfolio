import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/padqi.x",
  },
  { iconName: "fa fa-instagram", link: "https://instagram.com/padqi.x" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/c/padqi",
  },
  { iconName: "fa fa-github", link: "https://github.com/padqi" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
