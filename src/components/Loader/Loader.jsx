import { BeatLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <BeatLoader color="#ff8c42" size={15} />
    </div>
  );
}
