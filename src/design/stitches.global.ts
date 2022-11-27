export const reset = {
  [`*, *::before, *::after`]: {
    boxSizing: 'border-box',
    // background: rgb(0, 100, 0 / 0.05) !important, // for debugging

    '@media (prefers-reduced-motion: reduce)': {
      'animation-duration': '0.01ms !important',
      'animation-iteration-count': '1 !important',
      'transition-duration': '0.01ms !important',
      'scroll-behavior': 'auto !important',
    },

  },
  '@import': 'url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap")',
  '*': {
    margin: 0,
    padding: 0,
  },

  [`html, body`]: {
    height: '100%',
    background: "$background",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "14px",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },

  body: {
    position: "relative",
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
  },

  [`img, picture, video, canvas, svg`]: {
    display: 'block',
    maxWidth: '100%',
  },

  [`input, button, textarea, select`]: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "14px",
    color: "white",
    fontWeight: "$normal",
  },

  [`p, h1, h2, h3, h4, h5, h6`]: {
    overflowWrap: 'break-word',
  },

  ul: {
    listStyleType: 'none',
  },

  [`#root, #__next`]: {
    isolation: 'isolate',
  },
  a: { textDecoration: 'none' },
}

export const utilityClass = {
  '.sreen-reader-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' /* added line */,
    border: '0',
  },
};

export const commonStyle = {
  [`input, button, textarea, select, div`]: {
    '&:focus-visible': {
      outline: '$primary500 auto 1px',
    },
  },
};
