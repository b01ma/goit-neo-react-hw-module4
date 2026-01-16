import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, loading }) {
  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        disabled={loading}
        className={styles.button}
      >
        {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
