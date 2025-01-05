import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarey: {
  				pink: {
  					DEFAULT: '#FECCFF',
  					'100': '#FFCCCC',
  					'500': '#FF547D'
  				},
  				purple: {
  					DEFAULT: '#686EFF',
  					'100': '#CDC9FF'
  				},
  				orange: {
  					DEFAULT: '#FFEBCC',
  					'100': '#FFF9F5'
  				},
  				blue: {
  					DEFAULT: '#CCE7FF',
  					'100': '#F5F8FF'
  				},
  				green: {
  					DEFAULT: '#cdffcc'
  				}
  			},
  			secondary: {
  				white: {
  					'50': '#F5F7F9',
  					'100': '#EBEBEB',
  					'200': '#D8D8D8"?\n            "300": "#CECECE'
  				},
  				gray: {
  					'400': '#5A5A5A',
  					'500': '#4F4F4F'
  				},
  			},
      },
    },
  },
  plugins: [],
} satisfies Config;
