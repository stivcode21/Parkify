import { useEffect, useState } from "react";

const useTiempoTranscurrido = (horaInicial, horaActual) => {
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    if (!horaInicial || !horaActual) return;

    const [hIni, mIni] = horaInicial.split(":").map(Number);
    const [hAct, mAct] = horaActual.split(":").map(Number);

    const minutosInicial = hIni * 60 + mIni;
    const minutosActual = hAct * 60 + mAct;

    const diferencia = minutosActual - minutosInicial;

    if (diferencia < 0) {
      setResultado("En el futuro 🕒");
      return;
    }

    const horas = Math.floor(diferencia / 60);
    const minutos = diferencia % 60;

    let texto = "";
    if (horas > 0) texto += `${horas} hora${horas !== 1 ? "s" : ""}`;
    if (minutos > 0)
      texto += `${horas ? " y " : ""}${minutos} minuto${
        minutos !== 1 ? "s" : ""
      }`;
    if (!texto) texto = "menos de 1 minuto";

    setResultado(texto);
  }, [horaInicial, horaActual]);

  return resultado;
};

export default useTiempoTranscurrido;
