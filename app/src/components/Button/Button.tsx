import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  background-color: aquamarine;
`;

export interface Props {
  onPress?: () => void,
  children: React.ReactNode,
}

const Button: React.FC<Props> = ({ onPress, children }) => 
  <Container>
    <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>
  </Container>;

export default Button;
