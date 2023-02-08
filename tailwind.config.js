/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/Components/Header/Header.js",
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
          ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
