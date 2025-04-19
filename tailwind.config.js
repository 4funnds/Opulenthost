module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "wave-pattern": `url("data:image/svg+xml,%3Csvg width='1440' height='200' viewBox='0 0 1440 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 C150,80 300,120 450,100 C600,80 750,60 900,80 C1050,100 1200,160 1350,140 C1500,120 1650,20 1800,40 L1800,200 L0,200 Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
      },
      keyframes: {
        "wave-flow": {
          "0%": { transform: "translateX(0) translateZ(0)" },
          "100%": { transform: "translateX(-50%) translateZ(0)" },
        },
      },
      animation: {
        "wave-flow": "wave-flow 30s linear infinite",
      },
    },
  },
};
