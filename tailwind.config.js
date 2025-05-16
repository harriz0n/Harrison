/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        primary: '#6B5B95',  // Your main purple (deep & rich)
        accent: '#FF6F61',   // A vibrant coral for highlights
        muted: '#A9A9A9',    // For subtle text / borders
        background: '#ffffff',
        surface: '#f9f9f9'
      },
      borderRadius: {
        card: '1rem',
        soft: '0.5rem'
      },
      spacing: {
        'section': '6rem', // For consistent section padding
        'gutter': '1.5rem' // Grid gutter
      }
    }
  },
  plugins: []
}
