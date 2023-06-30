import { Dimensions, Platform, StatusBar } from 'react-native';

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const isIOS = Platform.OS === 'ios';

export const { height, width } = Dimensions.get('window');

export const dynamicWidth = (value: number) => {
  return (value * width) / 375;
};

export const dynamicHeight = (value: number) => {
  return (value * height) / 812;
};

export const sizeStatusBar = Platform.select({
  ios: isIphoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
});

export const sizeBottomSpace = () => {
  if (isIOS) {
    if (getBottomSpace() > 0) return getBottomSpace();
    else return dynamicHeight(15);
  }

  return dynamicHeight(12);
};

export const bottomNavigationSpace = isIOS ? getBottomSpace() - 20 : 0;

export const hitSlop = { top: 5, right: 5, bottom: 5, left: 5 };

export const paddingTopSpace = Platform.select({
  ios: isIphoneX() ? 59 : 20,
  android: StatusBar.currentHeight!! + 10,
  default: 0
});

export const paddingBottomSpace = Platform.select({
  ios: isIphoneX() ? 34 : 20,
  android: 20,
  default: 20
});

export const paddingBottomSpaceTabScreens = Platform.select({
  ios: isIphoneX() ? 190 : 120,
  android: 173,
  default: 190
});

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    dimen.height === 780 ||
    dimen.width === 780 ||
    dimen.height === 812 ||
    dimen.width === 812 ||
    dimen.height === 844 ||
    dimen.width === 844 ||
    dimen.height === 852 ||
    dimen.width === 852 ||
    dimen.height === 896 ||
    dimen.width === 896 ||
    dimen.height === 926 ||
    dimen.width === 926
  );
}
