const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      rose: colors.rose,
      purple: colors.purple,
      teal: colors.teal,
      emerald: colors.emerald,
      custom: {
        default: "#5F7D84",
      },
    },
    extend: {
      colors: {
        primary: "#177e84",
        primaryDark: "#0a5a5e",
        primaryLight: "#249fa6",
        secondary: "#fdea43",
        tertiary: "#592a17",
        quaternary: "#a4a4a3",
        dark: "#2f2d2e",
        light: "#fff",
      },
    },
  },
  purge: {
    options: {
      safelist: [
        "from-primary",
        "to-primary",
        "from-primaryDark",
        "to-primaryDark",
        "bg-gray-700",
        "text-gray-50",
        "bg-rose-600",
        "bg-gray-100",
        "bg-gray-200",
        "bg-gray-400",
        "text-gray-900",
        "text-gray-800",
        "from-yellow-400",
        "to-yellow-400",
        "from-yellow-500",
        "to-yellow-500",
        "from-yellow-600",
        "to-yellow-600",
        "from-yellow-700",
        "to-yellow-700",
        "from-yellow-800",
        "to-yellow-800",
        "from-gray-700",
        "to-gray-700",
        "from-red-400",
        "to-red-400",
        "from-red-500",
        "to-red-500",
        "from-red-600",
        "to-red-600",
        "from-indigo-700",
        "to-indigo-700",
        "to-indigo-500",
        "from-red-700",
        "to-red-700",
        "from-red-900",
        "to-red-500",
        "from-teal-700",
        "to-teal-700",
        "from-teal-500",
        "to-teal-500",
        "from-teal-600",
        "to-teal-600",
        "text-rose-600",
        "from-emerald-500",
        "to-emerald-500",
        "from-emerald-400",
        "to-emerald-400",
        "from-purple-900",
        "to-purple-900",
        "from-purple-800",
        "to-purple-800",
        "from-emerald-900",
        "to-emerald-900",
        "from-blue-900",
        "to-blue-900",
        "from-blue-700",
        "to-blue-700",
        "from-blue-400",
        "to-blue-400",
        "py-24",
      ],
    },
  },
};
