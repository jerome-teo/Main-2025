/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: "#B682DA"
        },
        darkblue: {
          DEFAULT: '#200B3A'
        },
				indigo: {
					DEFAULT: "#3A0B75"
				},
      },

			fontFamily: {
        etna: ["Etna", "serif"],
				fugaz: ["Fugaz One", "sans"],
				jetbrains: ["JetBrainsMono", "mono"],
			},
    }
  },

  plugins: []
};

module.exports = config;