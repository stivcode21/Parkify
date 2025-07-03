import { useEffect, useState } from "react";
import styles from "./Reloj.module.css";

const Reloj = () => {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();

      const opciones = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Bogota",
      };

      const horaColombia = ahora.toLocaleTimeString("es-CO", opciones);
      setHora(horaColombia);
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 60000); // actualizar cada minuto

    return () => clearInterval(intervalo);
  }, []);

  return <p className={styles.hour}>{hora}</p>;
};

export default Reloj;
