import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarComponent from './tabContent.controller';
import { RoutePropTypes, TabScreenPropsTypes } from './tabContent.types';

import HomeController from '../../modules/BottomTabs/home/index/index.controller';
import ProfileController from '../../modules/BottomTabs/profile/index/index.controller';

const { Navigator, Screen } = createBottomTabNavigator<TabScreenPropsTypes>();

const optionsDefault: RoutePropTypes = {
  options: {
    headerShown: false,
    gestureEnabled: false,
    tabBarHideOnKeyboard: true,
  },
};

const TabNavigator = () => {
  return (
    <Navigator
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
        },
        tabBarHideOnKeyboard: true,
      }}
      tabBar={TabBarComponent}>
      <Screen
        name="Home"
        component={HomeController}
        {...optionsDefault}
      />
      <Screen
        name="Profile"
        component={ProfileController}
        {...optionsDefault}
      />

    </Navigator>
  );
};

export default TabNavigator;
