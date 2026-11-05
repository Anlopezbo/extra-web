"use client";

import { FormEvent, useState } from "react";

export function NumberChecker() {
  const [number, setNumber] = useState("");
  const [series, setSeries] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "error" | "info" | null
  >(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setMessageType(null);

    if (!number) {
      setMessage("Ingresa el número de tu billete.");
      setMessageType("error");
      return;
    }

    if (number.length !== 4) {
      setMessage("El número debe tener exactamente 4 dígitos.");
      setMessageType("error");
      return;
    }

    if (!series) {
      setMessage("Ingresa la serie de tu billete.");
      setMessageType("error");
      return;
    }

    if (series.length !== 3) {
      setMessage("La serie debe tener exactamente 3 dígitos.");
      setMessageType("error");
      return;
    }

    /*
     * Aquí conectaremos posteriormente con el backend.
     *
     * Por ahora solamente validamos que los datos
     * tengan el formato correcto.
     */

    setMessage(
      "Los datos son correctos. La consulta estará disponible próximamente."
    );
    setMessageType("info");
  }

  function handleNumberChange(value: string) {
    if (/^\d{0,4}$/.test(value)) {
      setNumber(value);
      setMessage("");
      setMessageType(null);
    }
  }

  function handleSeriesChange(value: string) {
    if (/^\d{0,3}$/.test(value)) {
      setSeries(value);
      setMessage("");
      setMessageType(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* =========================================================
          TÍTULO
      ========================================================= */}
      <div className="text-xs font-extrabold uppercase tracking-wider text-[#29156f]">
        Consulta tu número
      </div>

      {/* =========================================================
          DESCRIPCIÓN
      ========================================================= */}
      <p className="mt-3 text-sm leading-5 text-slate-500">
        Verifica si tu billete es uno de nuestros ganadores.
      </p>

      {/* =========================================================
          CAMPOS
      ========================================================= */}
      <div className="mt-5 grid grid-cols-[1fr_0.8fr_auto] gap-x-2">
        {/* LABEL NÚMERO */}
        <label
          htmlFor="ticket-number"
          className="mb-1.5 block text-[9px] font-bold uppercase tracking-wide text-slate-500"
        >
          Número
        </label>

        {/* LABEL SERIE */}
        <label
          htmlFor="ticket-series"
          className="mb-1.5 block text-[9px] font-bold uppercase tracking-wide text-slate-500"
        >
          Serie
        </label>

        {/* ESPACIO SOBRE EL BOTÓN */}
        <div aria-hidden="true" />

        {/* INPUT NÚMERO */}
        <input
          id="ticket-number"
          name="number"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={4}
          value={number}
          onChange={(event) =>
            handleNumberChange(event.target.value)
          }
          placeholder="0000"
          aria-describedby="ticket-number-help"
          className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-center text-sm font-bold tracking-[0.15em] text-[#29156f] outline-none transition-colors placeholder:text-slate-300 focus:border-[#29156f] focus:ring-2 focus:ring-[#29156f]/10"
        />

        {/* INPUT SERIE */}
        <input
          id="ticket-series"
          name="series"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={3}
          value={series}
          onChange={(event) =>
            handleSeriesChange(event.target.value)
          }
          placeholder="000"
          aria-describedby="ticket-series-help"
          className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-center text-sm font-bold tracking-[0.15em] text-[#29156f] outline-none transition-colors placeholder:text-slate-300 focus:border-[#29156f] focus:ring-2 focus:ring-[#29156f]/10"
        />

        {/* BOTÓN */}
        <button
          type="submit"
          className="flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-[#29156f] px-4 text-[10px] font-extrabold text-white transition-colors hover:bg-[#3a2090] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29156f] focus-visible:ring-offset-2"
        >
          Consultar
        </button>

        {/* AYUDA NÚMERO */}
        <p
          id="ticket-number-help"
          className="mt-1 text-[12px] leading-none text-slate-400"
        >
          4 dígitos
        </p>

        {/* AYUDA SERIE */}
        <p
          id="ticket-series-help"
          className="mt-1 text-[12px] leading-none text-slate-400"
        >
          3 dígitos
        </p>

        {/* ESPACIO BAJO EL BOTÓN */}
        <div aria-hidden="true" />
      </div>

      {/* =========================================================
          MENSAJE
      ========================================================= */}
      {message && (
        <div
          role={messageType === "error" ? "alert" : "status"}
          className={[
            "mt-3 rounded-md px-3 py-2 text-[10px] font-medium leading-4",
            messageType === "error"
              ? "bg-red-50 text-red-700"
              : "bg-[#fff8d8] text-[#7a5b00]",
          ].join(" ")}
        >
          {message}
        </div>
      )}
    </form>
  );
}