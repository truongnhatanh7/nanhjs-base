import React from "react";
import { styled, keyframes } from "../../design/stitches.config";

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

export type ToastProps = {
	size?: number;
};

export const Toast: React.FC<ToastProps> = ({ size = 20 }) => {
	return <Wrapper></Wrapper>;
};

const Wrapper = styled("div", {
	width: "100px",
	height: "100px",
	background: "white",
});
