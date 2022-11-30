import { createStitches } from "@stitches/react";
import { reset, utilityClass, commonStyle } from "./stitches.global";
import typography, { globalTypo } from "./stitches.typography";
import sizes from "./stitches.sizes";
import color from "./stitches.color";
import utils from "./stitches.utils";

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		...color,
		...sizes,
		...typography,
	},
	media: {
		mobile: "(max-width: 640px)",
		tablet: "(max-width: 1024px)",
		fine: "(pointer: fine)",
		hover: "(hover: hover)",
		hoverNone: "(hover: none)",
	},
});

// Default: dark mode
export const lightTheme = createTheme({
	colors: {},
});

export const globalStyle = globalCss({
	...reset,
	...commonStyle,
	...utilityClass,
	...globalTypo,
});
