import React from 'react';

import {
  createStackNavigator,
} from '@react-navigation/stack';

import { StackTypesList } from './routes.types';

import AuthInputPhoneController from '../../modules/Auth/inputPhone/index.controller';
import AuthInputCodeController from '../../modules/Auth/inputCode/index.controller';
import BottomTabs from '../BottomTabs/routes'
import VideoAnswerController from '../../modules/BottomTabs/profile/videoAnswer/index.controller';

const { Navigator, Screen } = createStackNavigator<StackTypesList>();

const optionsDefault = {
  options: {
    headerShown: false,
    gestureEnabled: false,
    animationEnabled: true,
  },
};

const StackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="InputPhone"
        component={AuthInputPhoneController}
        {...optionsDefault}
      />
      <Screen
        name="InputCode"
        component={AuthInputCodeController}
        {...optionsDefault}
      />
      <Screen
        name="BottomTabs"
        component={BottomTabs}
        {...optionsDefault}
      />
      <Screen
        name="VideoAnswered"
        component={VideoAnswerController}
        {...optionsDefault}
      />
    </Navigator>
  );
};

export default StackNavigator;
