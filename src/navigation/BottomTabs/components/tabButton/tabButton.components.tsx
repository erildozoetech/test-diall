import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import IconSvg from '../../../../global/components/iconSvg/iconSvg.component';
import { IconsNameType } from '../../../../global/components/iconSvg/iconSvg.types';

import styles from './tabButton.styles';
import { TabButtonPropTypes } from './tabButton.types';

const TabButton = (props: TabButtonPropTypes) => {
  const { status = false, routeName, press } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boxIconLabel}
        hitSlop={{ left: 10, top: 10, right: 10, bottom: 10 }}
        onPress={() => press(false)}>
        <IconSvg
          name={routeName.toLowerCase() as IconsNameType}
          height={26}
          width={26}
        />
        <Text style={styles.routeLabel}>{routeName}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TabButton;
