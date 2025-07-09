import { useEffect, useState } from "react";

const useCalculoPago = (tiempoTexto) => {
  const [valor, setValor] = useState("...");
  const tarifaPorHora = 1500;

  useEffect(() => {
    if (!tiempoTexto) return;

    // Extraer números desde el texto
    const diasMatch = tiempoTexto.match(/(\d+)\s*día/);
    const horasMatch = tiempoTexto.match(/(\d+)\s*hora/);
    const minutosMatch = tiempoTexto.match(/(\d+)\s*minuto/);

    const dias = diasMatch ? parseInt(diasMatch[1]) : 0;
    const horas = horasMatch ? parseInt(horasMatch[1]) : 0;
    const minutos = minutosMatch ? parseInt(minutosMatch[1]) : 0;

    // Total de horas completas a cobrar (minutos redondeados a la hora siguiente si existen)
    let totalHoras = dias * 24 + horas;
    if (minutos > 0) totalHoras += 1; // redondeo hacia arriba

    const total = totalHoras * tarifaPorHora;

    // Formatear como moneda COP
    const formateado = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(total);

    setValor(formateado);
  }, [tiempoTexto, tarifaPorHora]);

  return valor;
};

export default useCalculoPago;
