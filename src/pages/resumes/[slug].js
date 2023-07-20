import React, { useState } from "react";
import AlertWrapper from "@/components/AlertWrapper/AlertWrapper";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import styles from "./slug.module.css";

const slug = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <section className={styles.Main}>
      {!user && (
        <AlertWrapper
          type="warning"
          heading="You are not logged in!"
          desc="You may download the resume, but to save for later editing, you will need to signup or login by clicking the 'Save' button (your Resume will automatically be added to your account)."
        />
      )}

      <section className={styles.Editor_Container}>
        <p>{router.query.slug}</p>

        <div className={styles.Editor}>

        </div>
      </section>
    </section>
  );
};

export default slug;
