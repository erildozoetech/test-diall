import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackTypesList = {
  BottomTabs: undefined;
  InputPhone: undefined;
  InputCode: undefined;
};

export type NavigationProps = NativeStackNavigationProp<StackTypesList>;
