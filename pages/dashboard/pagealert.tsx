import styles from "./pagealert.module.scss";

function PageAlert() {
  return (
    <div className={styles.div}>
      <ul>
        <li>
          <img src="/icons/error_icon.png" alt="error" />
          <span>There was a problem while loading the project data</span>
        </li>
        <li>
          <span className={styles.leftlink}>
            <a href="#">Try Again</a>
            <img src="/icons/alert_arrow_right.png" alt="alert" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default PageAlert;
