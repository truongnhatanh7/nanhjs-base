import React from 'react';
import { storiesOf } from "@storybook/react"
import { InputText } from "./InputText"

const story = storiesOf("Component/InputText", module);

story.add("Default", () => (
  <InputText placeholder="Enter your name" />
))

story.add("Email", () => (
  <InputText placeholder="Enter your email" type="email" />
))

story.add("Password", () => (
  <InputText placeholder="Enter your password" type="password" />
))

story.add("Tel", () => (
  <InputText placeholder="Enter your tel" type="tel" />
))


