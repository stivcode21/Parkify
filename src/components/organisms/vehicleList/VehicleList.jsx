import { useState } from "react";
import styles from "./VehicleList.module.css";
import ParkifyLogo from "@/components/atoms/parkifyLogo/ParkifyLogo";
import CounterVehicles from "@/components/molecules/counterVehicles/CounterVehicles";
import RowListVehicles from "@/components/molecules/rowListVehicles/RowListVehicles";
import { vehicles } from "@/data/dataVehicles";
import useHoraColombia from "@/hooks/useHoraColombia";
import useTiempoTranscurrido from "@/hooks/useTiempoTranscurrido";

const VehicleList = () => {
  const [selected, setSelected] = useState(null);
  const horaActual = useHoraColombia();
  const vehicleSelected = vehicles.find((v) => v.placa === selected);
  const tiempoPasado = useTiempoTranscurrido(vehicleSelected?.hora, horaActual); // desde esa hora

  return (
    <>
      <ParkifyLogo />
      <h2 className={styles.title}>Lista de Vehículos</h2>
      <CounterVehicles />
      <div className={styles.container}>
        <div className={styles.column1}>
          <table>
            <thead>
              <tr className={styles.header}>
                <th>Placa</th>
                <th>Vehículo</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <RowListVehicles
                  selected={selected}
                  setSelected={setSelected}
                  placaID={vehicle.placa}
                  vehiculo={vehicle.tipo}
                  fecha={vehicle.fecha}
                  hora={vehicle.hora}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.column2}>
          <div className={styles.containerPlaca}>
            <span className={styles.label}>Placa</span>
            <span className={styles.placa}>{selected}</span>
          </div>
          <div className={styles.containerTime}>
            <span className={styles.label}>Tiempo</span>
            <span className={styles.time}>{tiempoPasado}</span>
          </div>
          <div className={styles.containerPlaca}>
            <span className={styles.label}>Valor a pagar</span>
            <span className={styles.money}>{`$${"18.000"}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleList;
