import React from "react";
import styles from "./ShareOnLinkedIn.module.css";
import Image from "next/image";
import Link from "next/link";

const ShareOnLinkedIn = () => {
  return (
    <Link href={"/"}>
      <section className={`BubbleEff ${styles.Main}`}>
        <span> Share On LinkedIn</span>
        <img
          src={"/icons/LinkedinIcon.svg"}
          height={20}
          width={20}
          alt="linkedin icon"
        />
      </section>
    </Link>
  );
};

export default ShareOnLinkedIn;
