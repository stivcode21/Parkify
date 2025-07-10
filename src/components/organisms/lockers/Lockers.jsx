import Locker from "@/components/templates/locker/Locker";
import styles from "./Lockers.module.css";

const Lockers = () => {
  return (
    <div className={styles.lockers}>
      {Array.from({ length: 20 }).map((_, index) => (
        <Locker key={index} />
      ))}
    </div>
  );
};

export default Lockers;
