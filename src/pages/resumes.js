import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Resume.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Button } from "@nextui-org/react";
import ResumeListTable from "@/components/ResumeListTable/ResumeListTable";

const resumes = () => {
  const { user } = useUser();
  const [username, setUsername] = useState(user);

  return (
    <>
      <section className={styles.Main}>
        <div className={styles.Title}>
          <p>Your Resumes</p>
          <Button
            className={styles.CreateNew}
            auto
            size={"md"}
            css={{ color: "#ac51ff" }}
          >
            Create a new resume
          </Button>
        </div>

        <ResumeListTable />
      </section>
    </>
  );
};

export default resumes;

export const getServerSideProps = withPageAuthRequired();
