import styles from "./AvatarCard.module.scss";

type AvatarProps = {
  cardTitle: string;
  cardText: string;
  imgPath: string;
  name: string;
  title: string;
};

function AvatarCard({
  cardTitle,
  cardText,
  imgPath,
  name,
  title,
}: AvatarProps) {
  return (
    <>
      <div className={styles.cardLayout}>
        <h5 className={styles.cardTitle}>{cardTitle}</h5>
        <p className={styles.cardText}>{cardText}</p>
        <div className={styles.imgHolder}>
          <img src={imgPath} alt="avatar" />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </>
  );
}

export default AvatarCard;
