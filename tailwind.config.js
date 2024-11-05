module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            500: '#FF8C00',
            600: '#e67e00',
          },
        },
        transitionDuration: {
          '2000': '2000ms',
        },
        borderWidth: {
          '3': '3px',
        },
      },
    },
    plugins: [],
  }