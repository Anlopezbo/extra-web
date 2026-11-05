export const routes = {
  home: "/",

  juega: {
    root: "/juega",
    elExtra: "/juega/el-extra",
    comoJugar: "/juega/como-jugar",
    planDePremios: "/juega/plan-de-premios",
    calendario: "/juega/calendario",
    distribuidores: "/juega/distribuidores",
  },

  resultados: "/resultados",

  promociones: "/promociones",

  noticias: "/noticias",

  elExtra: {
    root: "/el-extra",
    quienesSomos: "/el-extra/quienes-somos",
    misionVision: "/el-extra/mision-vision",
    historia: "/el-extra/historia",
    organizacion: "/el-extra/organizacion",
    directorio: "/el-extra/directorio",
    contacto: "/el-extra/contacto",
  },

  transparencia: {
    root: "/transparencia",
    centroDocumentos: "/transparencia/centro-documentos",
    contratacion: "/transparencia/contratacion",
    rendicionCuentas: "/transparencia/rendicion-cuentas",
    entesControl: "/transparencia/entes-control",
    informacionInstitucional:
      "/transparencia/informacion-institucional",
  },

  atencion: {
    root: "/atencion",
    pqrsd: "/atencion/pqrsd",
    preguntasFrecuentes: "/atencion/preguntas-frecuentes",
    tramites: "/atencion/tramites",
    glosario: "/atencion/glosario",
    informacionInteres: "/atencion/informacion-interes",
  },

  miExtra: "/mi-extra",
} as const;