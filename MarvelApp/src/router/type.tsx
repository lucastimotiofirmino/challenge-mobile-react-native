import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTES} from './index';

type RootStackParamList = {
  Home: {userId: string};
  Search: {userId: string};
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ROUTES.Home
>;
