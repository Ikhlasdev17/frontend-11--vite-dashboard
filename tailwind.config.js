/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryBlue: '#377DFF',
				badgeGreen: '#3ADE00',
				badgeYellow: '#EBE100',
				grayText: '#8C8C8C',
				textColor: '#333333',
				bgGray: '#F5F6FA',
				cardGray: '#363A3F',
				iconGray: '#EBE8E8',
			},
		},
	},
	plugins: [],
}
