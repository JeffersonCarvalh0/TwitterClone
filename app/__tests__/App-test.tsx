import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

const createTestProps = (props: object) => ({
  ...props
});

describe('App', () => {
  const props = createTestProps({});
  const wrapper = shallow(<App {...props} />);

  describe('rendering', () => {
    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(5);
    });
  });
});
