export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    label: "Inicio",
    href: "/",
  },

  {
    label: "Juega",
    href: "/juega",
    children: [
      {
        label: "El Extra",
        href: "/juega/el-extra",
      },
      {
        label: "Cómo jugar",
        href: "/juega/como-jugar",
      },
      {
        label: "Plan de premios",
        href: "/juega/plan-de-premios",
      },
      {
        label: "Calendario",
        href: "/juega/calendario",
      },
      {
        label: "Distribuidores",
        href: "/juega/distribuidores",
      },
    ],
  },

  {
    label: "Resultados",
    href: "/resultados",
  },

  {
    label: "Promociones",
    href: "/promociones",
  },

  {
    label: "Noticias",
    href: "/noticias",
  },

  {
    label: "El Extra",
    href: "/el-extra",
    children: [
      {
        label: "Quiénes somos",
        href: "/el-extra/quienes-somos",
      },
      {
        label: "Misión y visión",
        href: "/el-extra/mision-vision",
      },
      {
        label: "Historia",
        href: "/el-extra/historia",
      },
      {
        label: "Organización",
        href: "/el-extra/organizacion",
      },
      {
        label: "Directorio",
        href: "/el-extra/directorio",
      },
      {
        label: "Contacto",
        href: "/el-extra/contacto",
      },
    ],
  },

  {
    label: "Transparencia",
    href: "/transparencia",
    children: [
      {
        label: "Centro de documentos",
        href: "/transparencia/centro-documentos",
      },
      {
        label: "Contratación",
        href: "/transparencia/contratacion",
      },
      {
        label: "Rendición de cuentas",
        href: "/transparencia/rendicion-cuentas",
      },
      {
        label: "Entes de control",
        href: "/transparencia/entes-control",
      },
      {
        label: "Información institucional",
        href: "/transparencia/informacion-institucional",
      },
    ],
  },

  {
    label: "Atención",
    href: "/atencion",
    children: [
      {
        label: "PQRSD",
        href: "/atencion/pqrsd",
      },
      {
        label: "Preguntas frecuentes",
        href: "/atencion/preguntas-frecuentes",
      },
      {
        label: "Trámites",
        href: "/atencion/tramites",
      },
      {
        label: "Glosario",
        href: "/atencion/glosario",
      },
      {
        label: "Información de interés",
        href: "/atencion/informacion-interes",
      },
    ],
  },

  {
    label: "Mi Extra",
    href: "/mi-extra",
  },
];