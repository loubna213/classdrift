import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				pink: {
  					'100': '#FFCCCC',
  					'500': '#FF547D',
  					DEFAULT: '#FECCFF'
  				},
  				purple: {
  					'100': '#CDC9FF',
  					DEFAULT: '#686EFF'
  				},
  				orange: {
  					'100': '#FFF9F5',
  					DEFAULT: '#FFEBCC'
  				},
  				blue: {
  					'100': '#F5F8FF',
  					DEFAULT: '#CCE7FF'
  				},
  				green: {
  					DEFAULT: '#cdffcc'
  				}
  			},
  			secondary: {
  				white: {
  					'50': '#F5F7F9',
  					'100': '#EBEBEB',
					'400': '#E5E5E5',
  					'200': '#D8D8D8',
					"300": '#CECECE'
  				},
  				gray: {
  					'500': '#5A5A5A',
  					'600': '#4F4F4F'
  				},
  			},
  		},
		fontFamily: {
			jost: ["Jost", "sans-serif"]
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
