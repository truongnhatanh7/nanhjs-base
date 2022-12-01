import React from "react";
import { storiesOf } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const story = storiesOf("Component/Skeleton", module);

story.add("Square Small", () => <Skeleton width={50} height={50} />);
story.add("Square Big", () => <Skeleton width={100} height={100} />);
story.add("Rectangle Small", () => <Skeleton width={100} height={50} />);
story.add("Rectangle Big", () => <Skeleton width={200} height={70} />);
story.add("Round Small", () => <Skeleton width={50} height={50} br={9999} />);
story.add("Round Big", () => <Skeleton width={100} height={100} br={9999} />);
story.add("Custom Border Radius", () => (
	<Skeleton width={100} height={100} br={36} />
));
