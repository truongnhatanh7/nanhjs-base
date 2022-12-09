import React from "react";
import { styled } from "../../design/stitches.config";
import { mergeRefs } from "react-merge-refs";

type PrimitiveToggle = React.ComponentProps<typeof Input>;

export const Toggle: React.FC<PrimitiveToggle> = React.forwardRef<
	HTMLInputElement,
	PrimitiveToggle
>((props, ref) => {
	const innerRef = React.useRef<HTMLInputElement>(null);
	const [checked, setChecked] = React.useState(false);
	return (
		<Label
			onClick={() => {
				console.log("label clicked");
				setChecked(!checked);
			}}
			onKeyDown={(e) => {
				if (e.code === "Space") {
					if (innerRef.current) {
						setChecked(!checked);
						innerRef.current.click();
					}
				}
			}}
			tabIndex={1}
			css={{
				background: `${checked ? "#81C784" : "#dddddd"}`,
			}}
		>
			<Input
				{...props}
				ref={mergeRefs([innerRef, ref])}
				type="checkbox"
				tabIndex={-1}
			/>

			<Spinner
				onClick={(e) => {
					e.stopPropagation();
					console.log("spinner clicked");
				}}
			></Spinner>
		</Label>
	);
});

const Label = styled("label", {
	position: "relative",
	width: 80,
	height: 40,
	background: "#dddddd",
	borderRadius: "9999px",
	padding: 4,
	display: "block",
});

const Spinner = styled("div", {
	position: "absolute",
	left: 8,
	top: "50%",
	width: 32,
	height: 32,
	borderRadius: "9999px",
	background: "#ffffff",
	transform: "translate(0, -50%)",
	transition: "all .4s cubic-bezier(.7, 0, .7, 1)",
});

const Input = styled("input", {
	opacity: 0,
	position: "absolute",
	inset: 0,

	[`&:checked ~ ${Spinner}`]: {
		transform: "translate(100%, -50%)",
	},
});
