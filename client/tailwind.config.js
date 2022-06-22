module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        form: '#D8D8D8',
      },
      fontFamily: {
        body: ['Public Sans']
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
