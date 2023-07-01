import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IVideoAnsweredProps } from '../../store/videos/index.types';

export type StackTypesList = {
  BottomTabs: undefined;
  InputPhone: undefined;
  InputCode: undefined;
  VideoAnswered: {
    video: IVideoAnsweredProps;
  };
};

export type NavigationProps = NativeStackNavigationProp<StackTypesList>;
