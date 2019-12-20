import { createStackNavigator } from 'react-navigation-stack';
import { Home, PictureDetail } from '../screens';

const stack = {
  Home: {
    screen: Home,
  },
  PictureDetail: {
    screen: PictureDetail,
  },
};

export const MainStack = createStackNavigator(stack);
export type MainRoutes = keyof typeof stack;
