import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>OnlineResumes.in © 2023. All rights reserved</p>
      <div>
        <Link href={"https://www.instagram.com/codexhimanshu"}>
          <Image src="/icons/InstaIcon.svg" width={20} height={20} />
        </Link>

        <Link href={"https://www.twitter.com/garadiya0"}>
          <Image src="/icons/TwitterIcon.svg" width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
