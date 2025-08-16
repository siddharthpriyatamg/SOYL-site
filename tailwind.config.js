
/** @type {import('next').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: { colors: { soyl: {50:'#f6f7fb',100:'#eceef7',200:'#d8dcf0',300:'#b6c0e4',400:'#8e9ed4',500:'#6b7fc6',600:'#5262b5',700:'#424f94',800:'#394478',900:'#333c64'} } } },
  plugins: [],
}
