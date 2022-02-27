module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: { white: '#ffffff' },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    }
  },
  plugins: []
}
