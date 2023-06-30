import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './index.styles';
import IconSvg from '../../../../global/components/iconSvg/iconSvg.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IAuthButtonProps } from './index.types';

const AuthButton: React.FC<IAuthButtonProps> = (props) => {
  const {
    customContainerStyle,
    disabled,
    label,
    loading,
    handlePress
  } = props;


  return (
    <TouchableOpacity
      style={[styles.container, customContainerStyle,
      disabled && {
        backgroundColor: "#fcc183",
      }]}
      onPress={handlePress}
      disabled={loading ? loading : disabled}>
      {loading ?
        <ActivityIndicator size={'small'} color={'#fff'} />
        :
        <Text style={styles.buttonLabel}>{label}</Text>
      }
    </TouchableOpacity>
  )
}
export default React.memo(AuthButton);