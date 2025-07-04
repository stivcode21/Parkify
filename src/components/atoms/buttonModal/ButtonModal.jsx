import styles from "./ButtonModal.module.css";
import useModalStore from "@/store/ModalStore";

const ButtonModal = ({ exit = false, name }) => {
  const { setModalState } = useModalStore();

  const handleClick = () => {
    if (exit) {
      window.location.href = "/login";
    } else {
      setModalState(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${exit ? styles.salida : ""}`}
    >
      {name}
    </button>
  );
};

export default ButtonModal;
