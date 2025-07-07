import styles from "./RowListVehicles.module.css";

const RowListVehicles = ({
  placaID,
  vehiculo,
  fecha,
  hora,
  selected,
  setSelected,
}) => {
  return (
    <tr
      onClick={() => setSelected(placaID)}
      className={selected === placaID ? styles.selected : ""}
    >
      <td>{placaID}</td>
      <td>{vehiculo}</td>
      <td>{fecha}</td>
      <td>{hora}</td>
    </tr>
  );
};

export default RowListVehicles;
