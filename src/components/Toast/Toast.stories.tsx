import React from "react";
import { storiesOf } from "@storybook/react";
import { Toast } from "./Toast";

const story = storiesOf("Component/Toast", module);

story.add("Tiny", () => <Toast />);
