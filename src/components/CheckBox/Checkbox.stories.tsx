import React from 'react';
import { storiesOf } from "@storybook/react"
import { styled } from "../../design/stitches.config"
import { CheckboxRoot, CheckboxIndicator, CheckIcon } from "./CheckBox"
import { useForm, Controller } from "react-hook-form"
import { Button } from "../Button/Button"

type FormValues = {
  c1: boolean
  checked2: boolean
}

const story = storiesOf("Component/Checkbox", module);

story.add("Default", () => (
  <CheckboxRoot>
    <CheckboxIndicator>
      <CheckIcon />
    </CheckboxIndicator>
  </CheckboxRoot>
))

story.add("React hook form", () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<FormValues>();
  const [checked, setChecked] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const onSubmit = handleSubmit((data) => {
    console.log("On submit")
    console.log(data);
  });

  return (<Form onSubmit={onSubmit}>   
    <CheckboxRoot {...register("c1")} >
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxRoot>
    Yasuo
    <Button type="submit">
      Submit
    </Button>
  </Form>) 
})

const Form = styled("form", {
  padding: "$x2",
  color: "$white",
  display: "flex",
  flexDirection: "column",
})






