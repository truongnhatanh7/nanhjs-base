import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "../../design/stitches.config";
import { Toggle } from "./Toggle";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/Button";

type FormValues = {
	isOn: boolean;
};

const story = storiesOf("Component/Toggle", module);

story.add("Default", () => (
	<Form>
		<Toggle />
	</Form>
));

story.add("React hook form", () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<FormValues>();
	const onSubmit = handleSubmit((data) => {
		console.log("On submit");
		console.log(data);
	});

	return (
		<Form onSubmit={onSubmit}>
			isOn
			<Toggle {...register("isOn")} />
			<Button
				type="submit"
				css={{
					marginTop: 8,
				}}
			>
				Submit
			</Button>
		</Form>
	);
});

const Form = styled("form", {
	padding: "$x2",
	color: "$white",
	display: "flex",
	flexDirection: "column",
});
