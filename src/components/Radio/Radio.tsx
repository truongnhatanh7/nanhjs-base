import React from "react";
import { styled } from "../../design/stitches.config";

import { mergeRefs } from "react-merge-refs";

type PrimitiveRadio = React.ComponentProps<typeof Input>;

export const Radio: React.FC<PrimitiveRadio> = React.forwardRef<
	HTMLInputElement,
	PrimitiveRadio
>((props, ref) => {
	const innerRef = React.useRef<HTMLInputElement>(null);
	const [checked, setChecked] = React.useState(false);

	return (
		<Label
			onClick={(e) => {
				setChecked(!checked);
				console.log(e.target.value);
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
			htmlFor={props.group}
		>
			<Input
				{...props}
				ref={mergeRefs([innerRef, ref])}
				type="radio"
				tabIndex={-1}
				id={props.group}
				name={props.name}
				value={props.group}
			/>
			<Check />
		</Label>
	);
});

const Label = styled("label", {
	width: 16,
	height: 16,
	position: "relative",
	background: "$black",
	border: "1px solid $white",
	borderRadius: "9999px",
	"&:focus-visible": {
		outline: "2px solid $white",
	},
});

const Check = styled("div", {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	background: "#ffffff",
	borderRadius: "9999px",
	zIndex: 2,
	display: "none",
	width: 12,
	height: 12,
});

const Input = styled("input", {
	opacity: 0,
	position: "absolute",
	inset: 0,
	zIndex: 3,

	[`&:checked + ${Check}`]: {
		display: "block",
	},
});
