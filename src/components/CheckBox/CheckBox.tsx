import React from "react";
import { styled } from "../../design/stitches.config";
import { CheckMark } from "./CheckMark";
import { mergeRefs } from "react-merge-refs";


type PrimitiveCheckbox = React.ComponentProps<typeof Input>


export const Checkbox: React.FC<PrimitiveCheckbox> = React.forwardRef<HTMLInputElement, PrimitiveCheckbox>((props, ref) => {
  const innerRef = React.useRef<HTMLInputElement>(null);
  const [checked, setChecked] = React.useState(false)
  return (<Label onClick={() => {
    setChecked(!checked)
  }}
    onKeyDown={(e) => {
      if (e.code === 'Space') {
        if (innerRef.current) {
          setChecked(!checked)
          innerRef.current.click();
        }
      }
    }}
    tabIndex={1}
  >
    {checked && <CheckMark />}
    <Input {...props} ref={mergeRefs([innerRef, ref])} type="checkbox" tabIndex={-1} />
  </Label>)
})


const Label = styled("label", {
	width: 16,
	height: 16,
	position: "relative",
	background: "$black",
	border: "1px solid $white",
	borderRadius: "$borderRadius$br",
	"&:focus-visible": {
		outline: "2px solid $white",
	},
});

const Input = styled("input", {

  opacity: 0,
  position: "absolute",
  inset: 0,
})
