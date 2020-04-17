import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";

import React from "react";
import { Text } from "react-native";

import CenterView from "../../../storybook/stories/CenterView";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator((getStory: () => React.FC) => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add("Default", () => (
    <Button onPress={action("clicked-text")}>Hello Button</Button>
  ))
  .add("Expanded", () => (
    <Button onPress={action("clicked-expanded")} expanded>
      Create account
    </Button>
  ));
