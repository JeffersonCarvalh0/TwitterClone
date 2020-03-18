import 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
import { JSDOM, DOMWindow } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

interface Global extends NodeJS.Global {
  window: DOMWindow,
  document: Document,
  navigator: {
    userAgent: string
  }
}

const globalNode: Global = {
  window: window,
  document: window.document,
  navigator: {
    userAgent: 'node-js',
  },
  ...global
};

function copyProps(src: any, target: any) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

copyProps(window, globalNode);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });
