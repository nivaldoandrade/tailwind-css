import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import twAnimate from  'tailwindcss-animate';

const myPlugin = plugin(({addBase}) => {
	addBase({
		body: {
			background: '#e5e5e0'
		}
	})
}, {
	theme: {
		extend: {
			colors: {
				nasa: {
					red: 'red',
					black: 'black'
				}
			}
		}
	}
});

export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {},
  },
  plugins: [
		twAnimate,
		myPlugin
	],
} satisfies Config;

