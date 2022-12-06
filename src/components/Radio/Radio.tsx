import React from "react";
import { styled } from "../../design/stitches.config";
import { CheckMark } from "./CheckMark";
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
			onClick={() => {
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
			htmlFor={props.htmlFor}
			tabIndex={1}
		>
			{checked && "checked"}
			<Input
				{...props}
				ref={mergeRefs([innerRef, ref])}
				type="radio"
				name={props.name}
				id={props.id}
			/>
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

const Input = styled("input", {
	display: "none",
	opacity: 0,
	position: "absolute",
	inset: 0,
});
