import React from "react";
import { styled, keyframes } from "../../design/stitches.config";
import { shimmer } from "./SkeletonKeyframes";
import { SkeletonProps } from "./SkeletonTypes";

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

export const Skeleton: React.FC<SkeletonProps> = ({
	width = 100,
	height = 100,
	br = 12,
}) => {
	return (
		<Wrapper
			css={{
				width: `${width}px`,
				height: `${height}px`,
				borderRadius: `${br}px`,
			}}
		></Wrapper>
	);
};

const Wrapper = styled("div", {
	display: "inline-block",
	position: "relative",
	overflow: "hidden",
	backgroundColor: "$accent6",

	"&::after": {
		content: "",
		position: "absolute",
		inset: "0",
		transform: "translateX(-100%)",
		background:
			"linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))",
		animation: `${shimmer} 2s infinite`,
	},
});
