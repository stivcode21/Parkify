import ExitModal from "@/components/atoms/exitModal/ExitModal";
import styles from "./ModalOverlay.module.css";
import { motion } from "framer-motion";
import useModalStore from "@/store/ModalStore";

const ModalOverlay = ({ children }) => {
  const { modalState, setModalState } = useModalStore();

  if (!modalState) return null;

  return (
    <div className={styles.overlay} onClick={() => setModalState(false)}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.05,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <ExitModal />
        <div className={styles.content}>{children}</div>
      </motion.div>
    </div>
  );
};

export default ModalOverlay;
