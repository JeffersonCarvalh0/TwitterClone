import React from "react";
import { Text } from "react-native";
import { render } from "react-native-testing-library";
import Button from "./Button";

describe("Button", () => {
  const { getByText } = render(
    <Button>
      {" "}
      <Text>welcome</Text>{" "}
    </Button>
  );

  it("should render a button", () => {
    expect(getByText("welcome")).toBeDefined();
  });
});
