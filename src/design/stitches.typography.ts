/* eslint-disable import/no-anonymous-default-export */
export default {
  fontSizes: {
    '12px': 'calc(12rem / 16)',
    '13px': 'calc(13rem / 16)',
    '14px': 'calc(14rem / 16)',
    '16px': 'calc(16rem / 16)',
    '18px': 'calc(18rem / 16)',
    '20px': 'calc(20rem / 16)',
    '24px': 'calc(24rem / 16)',
    '28px': 'calc(28rem / 16)',
    '36px': 'calc(36rem / 16)',
    "48px": 'calc(48rem / 16)',
  },
  fontWeights: {
    light: 400,
    normal: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {},
  letterSpacings: {},
  fonts: {
    headerFont: 'Lora, sans-serif',
    bodyFont: 'Inter, sans-serif',
  },
};



export const globalTypo = {
  [`input, textarea, select`]: {
    fontSize: '$14px',
    '&::placeholder': {
      color: '#7c7c7c',
    },
  },
  label: { fontSize: '$14px' },
};
