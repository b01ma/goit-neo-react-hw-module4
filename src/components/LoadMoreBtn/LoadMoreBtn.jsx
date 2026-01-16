import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, loading }) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
