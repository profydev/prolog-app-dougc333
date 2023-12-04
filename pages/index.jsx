//import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import MainPageHeader from "./MainPageHeader";

const IssuesPage = () => {
  return (
    <div>
      <MainPageHeader></MainPageHeader>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
