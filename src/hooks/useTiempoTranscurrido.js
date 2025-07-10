import { useEffect, useState } from "react";

const useTiempoTranscurrido = (fechaInicial, horaInicial) => {
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    if (!fechaInicial || !horaInicial) return;

    // Separar la fecha y hora
    const [dia, mes, anio] = fechaInicial.split("/").map(Number);
    const [hora, minuto] = horaInicial.split(":").map(Number);

    // Crear fecha de ingreso con zona horaria Bogotá (offset -5)
    const fechaIngreso = new Date(
      Date.UTC(anio, mes - 1, dia, hora + 5, minuto)
    ); // UTC compensando zona horaria manualmente

    // Obtener fecha actual en zona Bogotá
    const ahora = new Date();
    const ahoraBogota = new Date(
      ahora.toLocaleString("en-US", { timeZone: "America/Bogota" })
    );

    const diferenciaMs = ahoraBogota - fechaIngreso;

    if (diferenciaMs < 0) {
      setResultado("En el futuro 🕒");
      return;
    }

    const minutosTotales = Math.floor(diferenciaMs / 1000 / 60);
    const dias = Math.floor(minutosTotales / (60 * 24));
    const horas = Math.floor((minutosTotales % (60 * 24)) / 60);
    const minutos = minutosTotales % 60;

    let texto = "";
    if (dias > 0) texto += `${dias} día${dias !== 1 ? "s" : ""}`;
    if (horas > 0)
      texto += `${texto ? " - " : ""}${horas} hora${horas !== 1 ? "s" : ""}`;
    if (minutos > 0)
      texto += `${texto ? " - " : ""}${minutos} minuto${
        minutos !== 1 ? "s" : ""
      }`;
    if (!texto) texto = "menos de 1 minuto";

    setResultado(texto);
  }, [fechaInicial, horaInicial]);

  return resultado;
};

export default useTiempoTranscurrido;
