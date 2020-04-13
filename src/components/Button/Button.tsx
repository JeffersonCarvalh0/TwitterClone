import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";

const Splash = styled.TouchableNativeFeedback`
  border-radius: 50px;
`;

const Container = styled.View`
  background-color: #1da1f2;
  padding: 10px;
  border-radius: 50px;
  font-weight: bold;
  color: white;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export interface Props {
  onPress?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ onPress, children }) => (
  <Splash onPress={onPress}>
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  </Splash>
);

export default Button;
