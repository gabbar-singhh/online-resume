import styles from "@/styles/Home.module.css";

export default function Home() {
  const openTwitter = () => {
    window.open("http://linkfy.vercel.app/AEKX9", "_target");
  };

  const openInsta = () => {
    window.open("https://linkfy.vercel.app/UHI54", "_target");
  };
  return (
    <>
      <developer className={styles.Developer}>
        <h2 className={styles.DevTxt}>FOLLOW THE DEV!</h2>
        <div className={styles.ImgBox}>
          <img
            src={"/profile-pic.webp"}
            width={250}
            height={250}
            alt="developer's picture"
          />
        </div>
        <div className={styles.SelfPromo}>
          17 y/o — Self Taught Web Developer and Designer 👨‍💻
        </div>
        <div className={styles.Button}>
          <div
            className={styles.TwitterBtn}
            name="TwitterBtn"
            onClick={openTwitter}
          >
            <span>Follow me on twitter! </span>
            <img
              src="/icons/twitter-icon.svg"
              alt="twitter-icon"
              height={35}
              width={35}
            />
          </div>
          <div className={styles.InstaBtn} name="InstaBtn" onClick={openInsta}>
            <span>Follow me on insta! </span>
            <img
              src="/icons/instagram-icon.svg"
              alt="insta-icon"
              height={35}
              width={35}
            />
          </div>
        </div>
      </developer>
    </>
  );
}
