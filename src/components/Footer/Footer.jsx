import React from "react";
import ShareOnLinkedIn from "../Buttons/ShareOnLinkedIn";
import STYLED from "styled-components";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>OnlineResumes.in © 2023. All rights reserved</p>
      <div>
        <ShareOnLinkedIn />
      </div>
    </footer>
  );
};

const FOOTER = STYLED.footer`

`;

export default Footer;
