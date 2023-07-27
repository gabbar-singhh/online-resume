import React from "react";
import styles from "./ResumeListTable.module.css";
import ResumeCard from "../ResumeCard/ResumeCard";

const ResumeListTable = () => {
  return (
    <section className={styles.Main}>
      <div className={styles.Container}>
        <ResumeCard
          title={"Sample Resume"}
          lastModified={"20 Jul 2023, 04:20 PM"}
          relativeDate={"2 hours ago"}
        />
        <ResumeCard
          title={"campus placement ecell mit 23"}
          lastModified={"23 Jun 2023, 02:28 AM"}
          relativeDate={"1 year ago"}
        />
        <ResumeCard
          title={"Hipla-demo"}
          lastModified={"31 Aug 2023, 04:20 PM"}
          relativeDate={"1 month ago"}
        />{" "}
        <ResumeCard
          title={"student resume 33"}
          lastModified={"25 Dec 2023, 05:22 PM"}
          relativeDate={"3 months ago"}
        />{" "}
        <ResumeCard
          title={"Google Internship 388542"}
          lastModified={"02 Sep 2023, 12:20 AM"}
          relativeDate={"3 Days ago"}
        />{" "}
        {/* <ResumeCard
          title={"Google Internship 388542"}
          lastModified={"02 Sep 2023, 12:20 AM"}
          relativeDate={"3 Days ago"}
        />{" "}
        <ResumeCard
          title={"Google Internship 388542"}
          lastModified={"02 Sep 2023, 12:20 AM"}
          relativeDate={"3 Days ago"}
        />{" "}
        <ResumeCard
          title={"Google Internship 388542"}
          lastModified={"02 Sep 2023, 12:20 AM"}
          relativeDate={"3 Days ago"}
        />{" "}
        <ResumeCard
          title={"Google Internship 388542"}
          lastModified={"02 Sep 2023, 12:20 AM"}
          relativeDate={"3 Days ago"}
        />{" "}
        <ResumeCard
          title={"Google Internship 388542"}
          lastModified={"02 Sep 2023, 12:20 AM"}
          relativeDate={"3 Days ago"}
        />{" "} */}
      </div>
    </section>
  );
};

export default ResumeListTable;