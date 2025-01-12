/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        secondary: "#042279",
        primary: "#40B3B9",

        // Variantes de colores
        "secondary-claro": "#2E4C8F",
        "secondary-muy-claro": "#5A7BCA",
        "secondary-oscuro": "#02194C",

        "primary-claro": "#00C4C9",
        "primary-muy-claro": "#66D8DB",
        "primary-oscuro": "#007A86",

        // Colores neutros
        "gris-claro": "#B3BCC6",
        "gris-oscuro": "#4C5360",
      },
      backgroundImage: {
        // Gradientes
        "gradiente-vertical": "linear-gradient(to bottom, #042279, #009AA2)", // Azul oscuro a Azul-verde
        "gradiente-horizontal": "linear-gradient(to right, #042279, #00C4C9)", // Azul oscuro a Azul-verde claro
        "gradiente-suave": "linear-gradient(to bottom, #5A7BCA, #66D8DB)", // Azul claro a Azul-verde muy claro
        "gradiente-profundo": "linear-gradient(to bottom, #02194C, #007A86)", // Azul oscuro muy profundo a Azul-verde oscuro
        // imagenes
        map: "url('BlankMap-World_gray 1.svg')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    fontFamily: {
      primary: ["PF Handbook Pro", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".subtitulo": {
          fontFamily: "PF Handbook Pro, sans-serif",
          fontSize: "1.875rem", // Equivalente a text-3xl
          textAlign: "center", // Equivalente a text-center

          lineHeight: "1.25", // Equivalente a leading-tight
          "@screen sm": {
            fontSize: "2.25rem", // Equivalente a sm:text-4xl
          },
          "@screen lg": {
            fontSize: "3rem", // Equivalente a lg:text-5xl
          },
        },
      });
    },
  ],
};
