/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'title':'#004187',
        'subtitle':'#011731',
        'acent':"#F8CB6D",
        'acenttag':"#F8B62D",
        'acentred':'#C30D23',
        'acenttext':'#F39800',
        'acentbutton':'#F0BE2D',
        'text':'#595757'
      },
      fontFamily: {
        notosnscjktcblack: ["NotoSansCJKtc-Black"],
        notosnscjktcbold: ["NotoSansCJKtc-Bold"],
        notosnscjktcdemilight: ["NotoSansCJKtc-Demilight"],
        notosnscjktclight: ["NotoSansCJKtc-Light"],
        notosnscjktcMedium: ["NotoSansCJKtc-Medium"],
        notosnscjktcRegular: ["NotoSansCJKtc-Regular"],
        notosnscjktcThin: ["NotoSansCJKtc-Thin"],
      },
      screens:{
        '2xs':'375px',
        'xs':'414px'
      }
    },
  },
  plugins: [],
}

