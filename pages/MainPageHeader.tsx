import AvatarCard from "./AvatarCard";
import styles from "./MainPageHeader.module.scss";
import Link from "next/link";
import classNames from "classnames";

function MainPageHeader() {
  return (
    <>
      <div className={classNames(styles.headerContainer)}>
        <div className={classNames(styles.leftLogo)}>
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
        <Link href="/dashboard" className={classNames(styles.link)}>
          <span className={classNames(styles.linktext)}>Dashboard</span>
        </Link>
      </div>
      <h1 className={classNames(styles.header)}>
        Your Issues in Sight. At All Times
      </h1>
      <p className={classNames(styles.p)}>
        Powerful error tracking and monitoring for software applications Trusted
        by over 4000 startups
      </p>
      <p className={classNames(styles.p)}>Trusted by over 4000 startups</p>
      <div className={classNames(styles.imgfiller)}>
        <img src="/icons/Screen.png" alt="screen" />
      </div>
      <div className={classNames(styles.threeAvatars)}>
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
      <div className={classNames(styles.bottomSpacer)}></div>
    </>
  );
}

export default MainPageHeader;
