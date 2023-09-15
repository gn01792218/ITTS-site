/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'title':'#004187',
        'acent':"#F8CB6D",
        'body':'#595757'
      },
      fontFamily: {
        notosnscjktcblack: ["NotoSansCJKtc-Black"],
        notosnscjktcbold: ["NotoSansCJKtc-Bold"],
        notosnscjktcdemilight: ["NotoSansCJKtc-Demilight"],
        notosnscjktclight: ["NotoSansCJKtc-Light"],
        notosnscjktcMedium: ["NotoSansCJKtc-Medium"],
        notosnscjktcRegular: ["NotoSansCJKtc-Regular"],
        notosnscjktcThin: ["NotoSansCJKtc-Thin"],
      }
    },
  },
  plugins: [],
}

