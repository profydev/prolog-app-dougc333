import AvatarCard from "./AvatarCard";
import styles from "./MainPageHeader.module.scss";
import Link from "next/link";
function MainPageHeader() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.leftLogo}>
          <img src="/icons/logo-large.svg" alt="icon" />
        </div>
        <ul className={styles.headerListUL}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <Link href="/dashboard" className={styles.dashboardButton}>
          Dashboard
        </Link>
      </div>
      <h1>Your Issues in Sight. At All Times</h1>
      <p>Powerful error tracking and monitoring for software applications</p>
      <p>Trusted by over 4000 startups</p>
      <img src="/icons/Screen.png" alt="screen" />
      <div className={styles.threeAvatars}>
        <AvatarCard
          cardTitle="Frontend Development"
          cardText="Prolog has saved us many times. We get an alert, investigate the errror and fix it. That simple"
          imgPath="/icons/Avatar1.png"
          name="Mollie Hall"
          title="Web Developer, Sisyphus"
        ></AvatarCard>
        <AvatarCard
          cardTitle="Microservice Architecture"
          cardText="Our services fail from time to time. That's normal. But with Prolog we're able to track the issue down in no time"
          imgPath="/icons/Avatar2.png"
          name="Alec Whitten"
          title="Software Architect, Layers"
        ></AvatarCard>
        <AvatarCard
          cardTitle="Backend Servers"
          cardText="Prolog's UI is beautiful and intuitive. It's simple and our devs are always on top of pressing issues"
          imgPath="/icons/Avatar3.png"
          name="Kelly Williams"
          title="Engineering Manager, Catalog"
        ></AvatarCard>
      </div>
    </>
  );
}

export default MainPageHeader;
