const { info } = require("autoprefixer");

// tailwind.config.js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // text colors
        textmain: '#FFFFFF', 
        textdarkened: '#898989', 
        textdark: '#464646', 
        texthover: '#24BCC7',
        textlight: '#888888',
        textlightgray: '#DCDCDC',
        // Blacks
        black900: '#00000',
        black800: "#111111",
        black700: '#111111B2',
        black1000: '#202020',

        // Grays
        gray900: "#111111",
        gray800: "#1A1A1B",
        gray700: "#1C1D1E",
        gray600: "#333333",
        gray500: "#313131",
        gray400: "#393942",
        gray300: "#262627",
        gray200: "#6C6D6EB2",
        gray100: "#898A8BB2",
        floorplangray: '#2D2F30',
        calculatorbggray: '#595A5C',
        calculatortopbggray: '#6D6F70',
        modifiercardgray: "#292B2F",
        deletebuttonred: "#462A26",
        deleteborderred: "#EE7F76",
        deleteTextRed: "#EE7F76",
        gray150: "#1C1E23",
        gray250: "#838383",
        gray350: "#252528",
        gray450: "#383B42",


        // accent colors 
        darkenred: "#B22B2B",
        darkred: "#A30900",
        brightyellow: '#E1DD00',
        yellow: "#F2C94C",
        brightgreen: "#22CC00",
        blue: "#007AFF",

        // action colors
        success: "#349439",
        danger: "#F51F1F",
        disabled: "#5A5A5A",
        info: "#375B99",
        infomeniumdark: "#375B9980",
        infodarkened: "#292F39",
        modifiercardactive: '#4E525C',

        logout: "#FF3B30",

        saveButtonEnabledTM: "#375B99",
        saveButtonDisabledTM: "#293B5A" ,

        // onClick colors
        infoclick: '#6098F8',
        successclick: '#50D257',
        normalclick : '#393942'

      },
      fontSize: {
        'xxxs': '9px',
        'xxs': '11px',   // custom
        xs: "12px",
        xsm: '13px',
        sm: "14px",
        "smbase": '15px',  // custom
        base: "16px",
        'smlg': "17px",   // custom
        lg: "18px",
        xl: "20px",
        'smxl': "22px",   // custom
        "2xl": "24px",
        'sm3xl':"28px",
        "3xl": "30px",
        'sm4xl': '34px',
        "4xl": "36px",    // numpad
        'sm5xl': "46px",  // calculator nums
        "5xl": "48px",    // welcome & titles
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },

      // table status linear gradients
      backgroundImage: {
        'linear-non-active': "linear-gradient(90deg, #9A9A9A 0%, #565656 100%)",
        'linear-active': "linear-gradient(90deg, #94D887 0%, #5C8F52 100%)",
        'linear-drinks': "linear-gradient(90deg, #87D8D1 0%, #009689 100%)",
        'linear-corses': "linear-gradient(90deg, #BB89ED 0%, #7934BF 100%)",
        "linear-rush": "linear-gradient(90deg, #F36666 0%, #AD4343 100%)",
        'linear-idle': 'linear-gradient(90deg, #96AA92 0%, #5A6A57 100%)',
        "linear-time": "linear-gradient(90deg, #FFE993 0%, #CAA100 100%)",
        "linear-proforma": "linear-gradient(90deg, #FFC293 0%, #E76400 100%)",
        "linear-payment": "linear-gradient(90deg, #626262 0%, #262626 100%)",
      },
      borderWidth: {
        'custom-thin': '0.5px',
        'custom-1px': '1px'
      },
      borderColor: {
        'custom-gray': '#838383',
        'custom-blue': "#375B99"
      },
      boxShadow: {
        'custom-white-blur': '0px 0px 30px 3px #C4C4C440',
        'custom-white-blur-small': '0px 0px 10px 0px #72727240'


      },
      screens: {
        '4k': '2100px',
        'big-tablet': '1920px',      // Big Tablet (1920x1080)4
        'ipad': '1024px',              // iPad (1024x768)2
        'ipad-mini': '1133px',         // iPad Mini (1133x744)3
        'android-tablet': '965px',   // Android Tablet (965x602)1
        's-tablet': '500px',   // Android Tablet (965x602)1

      },
    },
  },
  plugins: [],
};


