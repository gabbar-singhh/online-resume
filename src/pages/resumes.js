import React, { useState } from "react";
import styles from "@/styles/Resume.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ResumeListTable from "@/components/ResumeListTable/ResumeListTable";

const resumes = () => {
  const { user } = useUser();
  const [username, setUsername] = useState(user);

  return (
    <>
      <section className={styles.Main}>
        <div className={styles.CreateNewDiv}>
          <span
            onClick={() => {
              console.log("wewe");
            }}
            className={styles.CreateNewBtn}
          >
            Create a new resume
          </span>
        </div>

        <div className={styles.TableList}>
          <ResumeListTable />
        </div>
      </section>
    </>
  );
};

export default resumes;

export const getServerSideProps = withPageAuthRequired();
