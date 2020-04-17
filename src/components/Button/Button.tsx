import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";

export interface Props {
  onPress?: () => void;
  children: React.ReactNode;
  expanded?: boolean;
}

const Container = styled.View`
  background-color: #1da1f2;
  padding: 10px;
  border-radius: 50px;
  overflow: hidden;
  align-self: ${(props: Props) => (props.expanded ? "stretch" : "center")};
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: ${(props: Props) => (props.expanded ? "20px" : "14px")};
`;

const Button = ({ onPress, children, expanded = false }: Props) => (
  <TouchableNativeFeedback onPress={onPress} useForeground={true}>
    <Container expanded={expanded}>
      <ButtonText expanded={expanded}>{children}</ButtonText>
    </Container>
  </TouchableNativeFeedback>
);

export default Button;
