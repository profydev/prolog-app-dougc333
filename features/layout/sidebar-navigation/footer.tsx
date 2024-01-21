import styles from "./footer.module.scss";

type FooterProps = {
  dataCy?: string;
};

export function Footer({ dataCy }: FooterProps) {
  return (
    <>
      <div data-cy={dataCy} className={styles.footer}>
        <div className={styles.version}>Version 14.5.1</div>
        <ul className={styles.resetlist}>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src="/icons/logo-small.svg" alt="logo" />
        </div>
      </div>
    </>
  );
}
