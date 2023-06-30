import { StyleProp, ViewStyle } from 'react-native';

export interface IconProps {
  name: IconsNameType;
  height?: string | number;
  width?: string | number;
  color?: string;
  fill?: string;
  style?: StyleProp<ViewStyle>;
  brand?: string;
}

export type IconsNameType =
  | 'arrowBack'
  | 'home'
  | 'loginText'
  | 'logoDiall'
  | 'profile';
