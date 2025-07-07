import { useState } from "react";
import styles from "./VehicleList.module.css";
import ParkifyLogo from "@/components/atoms/parkifyLogo/ParkifyLogo";
import ButtonSend from "@/components/atoms/buttonSend/ButtonSend";
import CounterVehicles from "@/components/molecules/counterVehicles/CounterVehicles";
import RowListVehicles from "@/components/molecules/rowListVehicles/RowListVehicles";
import { vehicles } from "@/data/dataVehicles";

const VehicleList = () => {
  const [selected, setSelected] = useState(null);

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
        <div className={styles.column2}></div>
      </div>
    </>
  );
};

export default VehicleList;
