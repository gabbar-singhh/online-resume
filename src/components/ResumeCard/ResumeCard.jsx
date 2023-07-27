import React from "react";
import styles from "./ResumeCard.module.css";
import STYLED from "styled-components";

const ResumeCard = ({ title, lastModified, relativeDate }) => {
  return (
    <section className={styles.Main}>
      <div className={styles.Title}>{title}</div>
      <div className={styles.LastModified}>
        <p>{lastModified}</p>
        <p>{relativeDate}</p>
      </div>
      <div className={styles.Options}>
        <p>preview</p>
        <p>edit</p>
        <p>delete</p>
      </div>
    </section>
  );
};

export default ResumeCard;
