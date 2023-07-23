import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.Main}>
        Go To <Link href={"/resumes"}>resumes/</Link>
      </section>
    </>
  );
}
