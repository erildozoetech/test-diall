import React from 'react';
import { LayoutAnimation } from 'react-native';
import { View } from 'react-native';

import TabButton from './components/tabButton/tabButton.components';
import styles from './tabContent.styles';

const TabContentLayout: React.FC = ({ state, navigation }: any) => {
  LayoutAnimation.easeInEaseOut();

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const press = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabButton
            key={index}
            press={press}
            routeName={route.name}
            status={state.index === index}
          />
        );
      })}
    </View>
  );
};

export default React.memo(TabContentLayout);
