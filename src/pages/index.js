import styles from "@/styles/Home.module.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
export default function Home() {
  return (
    <>
      <section className={styles.Main}>
        <NavigationBar />
      </section>
    </>
  );
}
