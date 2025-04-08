const { plugin } = require("postcss");

module.exports = {
    darkmode: 'class',

    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {}
    },
    plugins: [],
}
