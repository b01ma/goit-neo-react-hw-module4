import styles from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
}
