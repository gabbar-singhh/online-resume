import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import ShareOnLinkedIn from "../Buttons/ShareOnLinkedIn";

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

export default Footer;
