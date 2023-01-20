/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,svelte,ts}"],

  theme: {
    colors: {
      "primary": {
        1: "#5339DD",
        2: "#39279C"
      },
      "secondary": {
        1: "#C6D116",
        2: "#A5AF15"
      },

      "success": {
        1: "#48C629",
        2: "#3DA723"
      },
      "warning": {
        1: "#FFB22B",
        2: "#CD9024"
      },
      "error": {
        1: "#FE5A5A",
        2: "#CF4747"
      },

      "white": "white",
      "black": "black",

      "gray": {
        1: "#F9F9F9",
        2: "#EAEAEA",
        3: "#BABABA",
        4: "#A5A5A5"
      },

      "red": "#FF5555",
      "green": "#27ae60",

      "transparent": "transparent"
    },

    fontSize: {
      "small": ["0.8rem", { lineHeight: 1 }],
      "normal": ["0.9rem", { lineHeight: 1 }],
      "large": ["1.1rem", { lineHeight: 1 }],
      "xl": ["2rem", { lineHeight: 1 }],
      "2xl": ["3.75rem", { lineHeight: 1 }],
      "3xl": ["5rem", { lineHeight: 1 }]
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },

    extend: {
      animation: {
        "reverse-spin": "reverse-spin 1s linear infinite"
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)"
          }
        }
      }
    }
  }
};