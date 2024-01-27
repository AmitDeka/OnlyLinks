/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],

  // daisyUI config (optional - here are the default values)
  // daisyui: {
  //  themes: {
  //    lightTheme: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  //  }
  // },

  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#58bb64",
          secondary: "#9dcbd7",
          accent: "#759fc7",
          neutral: "#143814",
          "base-100": "#f4fbf4",
        },
        darkTheme: {
          primary: "#44a750",
          secondary: "#285562",
          accent: "#38628a",
          neutral: "#04480c",
          "base-100": "#011203",
        },
      },
    ],
    darkTheme: "darkTheme", // name of one of the included themes for dark mode
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    base: true, // applies background color and foreground color for root element by default
  },
};
