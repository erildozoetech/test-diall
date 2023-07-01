import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from './index.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { IVideoAnsweredProps } from '../../../../../store/videos/index.types';

interface IProps {
  item: IVideoAnsweredProps
  handleNavigateToVideo: (item: IVideoAnsweredProps) => void
}
const Card: React.FC<IProps> = ({ item, handleNavigateToVideo }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={.7}
      onPress={() => handleNavigateToVideo(item)}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
      />
      <ImageBackground
        source={{ uri: item.poster }}
        style={styles.bgImage}
        imageStyle={{ borderRadius: 10 }}
        resizeMode='cover' />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Card);