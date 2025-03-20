import '@testing-library/jest-dom';
import 'jest-styled-components';

global.ResizeObserver = require('resize-observer-polyfill');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));
