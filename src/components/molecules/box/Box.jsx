import React from "react";
import styles from "./Box.module.css";
import ButtonModal from "@/components/atoms/buttonModal/ButtonModal.jsx";
import Xd from "@/components/templates/x/Xd";

const Box = () => {
  return (
    <div class={styles.box}>
      <ButtonModal name="Ingresar Vehiculos" component={<Xd />} />
      <ButtonModal name="Salida Vehiculos" component={<Xd />} />
      <ButtonModal name="Lista Vehiculos" component={<Xd />} />
      <ButtonModal name="Historial" component={<Xd />} />
      <ButtonModal name="Inventario" component={<Xd />} />
      <ButtonModal name="Salir" exit={true} />
    </div>
  );
};

export default Box;
