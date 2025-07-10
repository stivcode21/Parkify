import styles from "./Locker.module.css";

const Locker = () => {
  return (
    <div className={styles.locker}>
      <div className={styles.chart}>
        <div className={styles.chartChildren}></div>
      </div>
      <div className={`${styles.bars} ${styles.bars1}`}></div>
      <div className={`${styles.bars} ${styles.bars2}`}></div>
      <div className={`${styles.bars} ${styles.bars3}`}></div>
      <div className={styles.lock}></div>
    </div>
  );
};

export default Locker;
