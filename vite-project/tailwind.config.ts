import type {Config} from 'tailwindcss';
import twAnimate from  'tailwindcss-animate';

export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {},
  },
  plugins: [
		twAnimate
	],
} satisfies Config;

