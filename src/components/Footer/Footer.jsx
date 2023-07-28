import React from "react";
import ShareOnLinkedIn from "../Buttons/ShareOnLinkedIn";
import STYLED from "styled-components";

const Footer = () => {
  return (
    <FOOTER>
      <p>OnlineResumes.in © 2023. All rights reserved</p>
      <div>
        <ShareOnLinkedIn />
      </div>
    </FOOTER>
  );
};

const FOOTER = STYLED.footer`
width: 100%;
text-align:center;
background-color: var(--light-black);

color: #fff;
cursor: default;
display: inline-flex;
align-items: center;
justify-content: space-evenly;
padding: 0.4em 0;

p {
  font-size: 0.8em;
}

div:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
}
`;

export default Footer;
