import React from "react";
import { storiesOf } from "@storybook/react";
import { Spinner } from "./Spinner";

const story = storiesOf("Component/Spinner", module);

story.add("Tiny", () => <Spinner size={30} />);
story.add("Small", () => <Spinner size={80} />);
story.add("Default", () => <Spinner size={120} />);
story.add("Big", () => <Spinner size={200} />);
story.add("Giant", () => <Spinner size={300} />);
