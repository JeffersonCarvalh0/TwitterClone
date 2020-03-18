import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Text } from 'react-native';
import CenterView from '../CenterView';

interface Props {
  onPress: () => void,
  children: React.ReactNode,
}

export const Button: React.FC<Props> = ({ onPress, children }) => 
  <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;

storiesOf('Button', module)
  .addDecorator((getStory: () => React.FC) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
