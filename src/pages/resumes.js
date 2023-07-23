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
      <Head>
        <title>OnlineResumes.in</title>
      </Head>
      <section className={styles.Main}>
        {/* <div>
          <img src="/ill.png" height={350}/>
        </div>
        <div className={styles.Header}>
          <p>Your Resumes</p>
          <Button auto bordered size={"md"}>
            create a new resume
          </Button>
        </div> */}
        <ResumeListTable />
      </section>
    </>
  );
};

export default resumes;

export const getServerSideProps = withPageAuthRequired();
