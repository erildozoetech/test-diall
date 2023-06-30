import React from 'react';
import { Text, View } from 'react-native';

import styles from './index.styles';
import IconSvg from '../../../../global/components/iconSvg/iconSvg.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IAuthHeaderProps } from './index.types';

const AuthHeader: React.FC<IAuthHeaderProps> = ({ buttonBack }) => {

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {buttonBack && (
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={buttonBack}>
            <IconSvg
              name={'arrowBack'}
              height={20}
              width={20}
            />
            <Text style={styles.buttonBackLabel}>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <IconSvg
          name={'logoDiall'}
          height={43}
          width={75}
        />
      </View>
      <View style={styles.right}></View>

    </View>
  )
}
export default AuthHeader;