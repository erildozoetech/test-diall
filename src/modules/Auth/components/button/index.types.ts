import { ViewStyle } from "react-native";

export interface IAuthButtonProps {
  customContainerStyle?: ViewStyle;
  disabled: boolean;
  label: string;
  loading: boolean;
  handlePress: () => void;
}