import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "../../design/stitches.config";
import { Radio } from "./Radio";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/Button";

type FormValues = {
	role: string;
};

const story = storiesOf("Component/Radio", module);

story.add("Default", () => (
	<Form>
		<Radio />
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
			Frontend
			<Radio group="fe" {...register("role")} />
			Backend
			<Radio group="be" {...register("role")} />
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
