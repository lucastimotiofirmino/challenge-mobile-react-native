/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args,
  };
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));
jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
}));

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/LogBox/LogBox');

beforeEach(() => {
  useNavigation.mockReset();
});

afterEach(() => {
  jest.clearAllMocks();
});
