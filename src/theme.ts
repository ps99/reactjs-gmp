export const iColor = {
  red: 'rgb(246 82 97)',
  darkGray: 'rgb(66 66 66)',
  black: (opacity = 1) => `rgb(35 35 35 / ${opacity})`,
  gray: 'rgb(85 85 85)',
  white: (opacity = 1) => 
  `rgb(255 255 255 / ${opacity})`,
}

export const color = {
  bodyBg: iColor.gray,
  mainBg: iColor.black(),
  text: iColor.white(0.7),
  title: iColor.red,
  btnBg: 'rgb(96 96 96 / 0.68)',
  btnBgPrimary: 'red',
  inputBg: 'rgb(50 50 50 / 0.7)',
  inputPlaceholder: iColor.white(0.3),
  naviLink: iColor.white(),
  contextMenuBg: 'rgb(42 32 45 / 1)',
  border: 'rgb(151 151 151 / 0.5)'
}

export const font = {
  family: [
    'Montserrat',
    'sans-serif'
  ].join(','),

  size: {
    xl: '40px', // 2rem
    md: '20px', // 1rem
    xs: '18px', // 0.9rem
    xxs: '16px', //0.8rem
    xxxs: '14px' // 0.7rem
  }
}
