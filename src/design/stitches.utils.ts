/* eslint-disable import/no-anonymous-default-export */
export default {
  mx: (value: number | string) => ({ marginLeft: value, marginRight: value }),
  my: (value: number | string) => ({ marginTop: value, marginBottom: value }),
  px: (value: number | string) => ({ paddingLeft: value, paddingRight: value }),
  py: (value: number | string) => ({ paddingTop: value, paddingBottom: value }),
  mb: (value: number | string) => ({ marginBottom: value }),
  by: (value: number | string) => ({ borderTop: value, borderBottom: value }),
  lineLimit: (value: number) => ({
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    '-webkit-line-clamp': value,
  }),
  size: (value: string) => {
    const [w, h] = value.split(' ');
    return { width: w, height: h || w };
  },
  flexPosition: (position: string) => {
    const [justifyContent, alignItems] = position.split(' ');
    return {
      justifyContent,
      alignItems: alignItems || justifyContent,
    };
  },
  solidBorder: (color: string) => ({ border: `1px solid ${color}` }),
  clickableArea: (size: string) => ({
    position: 'relative',
    '&::after': {
      content: '',
      position: 'absolute',
      top: `-${size}`,
      left: `-${size}`,
      right: `-${size}`,
      bottom: `-${size}`,
      // border: '1px solid red', // console.log for click area
    },
  }),
};
