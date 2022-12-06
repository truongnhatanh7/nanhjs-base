import React from 'react';
import { storiesOf } from "@storybook/react"
import { styled } from "../../design/stitches.config"
import { Checkbox } from "./CheckBox"
import { useForm, Controller } from "react-hook-form"
import { Button } from "../Button/Button"

type FormValues = {
  c1: boolean
  c2: boolean
}

const story = storiesOf("Component/Checkbox", module);

story.add("Default", () => (
  <Form>
    <Checkbox />
  </Form>
))

story.add("React hook form", () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    console.log("On submit")
    console.log(data);
  });

  return (<Form onSubmit={onSubmit}>
    C1
    <Checkbox {...register("c1")} />
    C2
    <Checkbox {...register("c2")} />
    <Button type="submit" css={{
      marginTop: 8
    }}>
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






