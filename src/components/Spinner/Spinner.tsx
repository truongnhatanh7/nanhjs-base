import React from "react";
import { styled, keyframes } from "../../design/stitches.config";
import { SpinnerProps, BarProps } from "./SpinnerTypes";
import { spinner } from "./SpinnerKeyframes";
type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

const Bar: React.FC<BarProps> = ({ size = 20 }) => {
	return (
		<SpinnerBar
			css={{
				transformOrigin: `${size}px ${size}px`,

				"&:after": {
					height: `${size / 3}px`,
				},
			}}
		></SpinnerBar>
	);
};

export const Spinner: React.FC<SpinnerProps> = ({ size = 20 }) => {
	const barSize = size / 2;
	return (
		<Wrapper
			css={{
				width: `${size}px !important`,
				height: `${size}px !important`,
			}}
		>
			{Array(12)
				.fill(0)
				.map((_, index) => (
					<Bar size={barSize} key={index}></Bar>
				))}
		</Wrapper>
	);
};

const SpinnerBar = styled("div", {});

const Wrapper = styled("div", {
	display: "inline-block",
	position: "relative",
	color: "white",

	[`& ${SpinnerBar}`]: {
		animation: `${spinner} 1.2s linear infinite`,

		"&:after": {
			content: " ",
			display: "block",
			position: "absolute",
			top: "3px",
			left: "50%",
			width: "5%",
			borderRadius: "20%",
			background: "#fff",
		},

		"&:nth-child(1)": {
			transform: "rotate(0deg)",
			animationDelay: "-1.1s",
		},

		"&:nth-child(2)": {
			transform: "rotate(30deg)",
			animationDelay: "-1s",
		},

		"&:nth-child(3)": {
			transform: "rotate(60deg)",
			animationDelay: "-0.9s",
		},

		"&:nth-child(4)": {
			transform: "rotate(90deg)",
			animationDelay: "-0.8s",
		},

		"&:nth-child(5)": {
			transform: "rotate(120deg)",
			animationDelay: "-0.7s",
		},

		"&:nth-child(6)": {
			transform: "rotate(150deg)",
			animationDelay: "-0.6s",
		},

		"&:nth-child(7)": {
			transform: "rotate(180deg)",
			animationDelay: "-0.5s",
		},

		"&:nth-child(8)": {
			transform: "rotate(210deg)",
			animationDelay: "-0.4s",
		},

		"&:nth-child(9)": {
			transform: "rotate(240deg)",
			animationDelay: "-0.3s",
		},

		"&:nth-child(10)": {
			transform: "rotate(270deg)",
			animationDelay: "-0.2s",
		},

		"&:nth-child(11)": {
			transform: "rotate(300deg)",
			animationDelay: "-0.1s",
		},

		"&:nth-child(12)": {
			transform: "rotate(330deg)",
			animationDelay: "0s",
		},
	},
});
