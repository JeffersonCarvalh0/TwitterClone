import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

export interface Props {
  onPress?: () => void,
  children: React.ReactNode,
}

const Button: React.FC<Props> = ({ onPress, children }) => 
  <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;

export default Button;
