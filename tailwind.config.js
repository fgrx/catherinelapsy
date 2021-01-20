const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      rose: colors.rose,
      teal: colors.teal,
      emerald: colors.emerald
    }
  },
  purge: {
    options: {
      safelist: [
        "bg-rose-600",
        "bg-gray-100",
        "bg-gray-200",
        "bg-gray-400",
        "text-gray-900",
        "text-gray-800",
        "from-yellow-500",
        "to-yellow-500",
        "from-yellow-700",
        "to-yellow-700",
        "from-gray-700",
        "to-gray-700",
        "from-red-500",
        "to-red-500",
        "from-indigo-700",
        "to-indigo-700",
        "to-indigo-500",
        "from-red-700",
        "to-red-700",
        "from-teal-700",
        "to-teal-700",
        "from-teal-500",
        "to-teal-500",
        "to-teal-600",
        "text-rose-600",
        "py-24"
      ]
    }
  }
};
