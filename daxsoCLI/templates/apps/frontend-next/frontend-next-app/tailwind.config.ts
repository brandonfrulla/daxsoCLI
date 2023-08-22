import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			fontFamily: {
				sans: ["TT Norms Pro", "Inter", ...defaultTheme.fontFamily.sans],
				cera: ["Cera Pro", "Inter", ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				persianorange: "hsla(27, 68%, 59%, 1)",
				coquelicot: "hsla(13, 90%, 51%, 1)",
				raisinblack: "hsla(240, 12%, 20%, 1)",
				burntorange: "hsla(20, 61%, 46%, 1)",
				silver: "hsla(40, 6%, 72%, 1)",
				Licorice: "#1D101B",
				Eggplant: "#65505B",
				Wine: "#622E35",
				RichBlack: "#060914",
				RoseTope: "#92636A",
				DkPurple: "#341D26",
				ChocCosmos: "#651A23",
				BlackBeen: "#330717",
				Cordovan: "#853B3D",
			},


			


		},

		
		
	},
  plugins: [],
}
export default config
