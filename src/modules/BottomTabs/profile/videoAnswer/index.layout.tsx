import React from 'react';
import styles from './index.styles';
import { Video, ResizeMode } from 'expo-av';
import { View, Text, TouchableOpacity } from 'react-native';
import IconSvg from '../../../../global/components/iconSvg/iconSvg.component';
import { IVideoAnswerLayoutProps } from './index.types';

const VideoAnswerLayout: React.FC<IVideoAnswerLayoutProps> = ({ localState, handlers }) => {

  const { video } = localState;
  const {
    handleBack,
    handleShareVideo
  } = handlers;
  return (
    <View
      style={styles.container}>
      <Video
        source={{ uri: video.uri }}
        style={styles.video}
        shouldPlay={true}
        resizeMode={ResizeMode.COVER}
        isLooping
        usePoster
        useNativeControls
        posterSource={{ uri: video.poster }}
        posterStyle={{ resizeMode: 'cover', height: '100%' }}
      />

      <View style={styles.header}>
        <TouchableOpacity style={styles.headerContent} onPress={handleBack}>
          <IconSvg
            name='arrowWhite'
            height={30}
            width={30}
          />
          <Text style={styles.headerTitle}>Answers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoInfoBox}>
        <View>
          <Text style={styles.videoOwnerLabel}>{video.owner}</Text>
          <Text style={styles.videoTitle}>{video.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleShareVideo(video)}>
          <IconSvg
            name='share'
            height={45}
            width={45}
          />
        </TouchableOpacity>
      </View>
    </View>

  )
};

export default React.memo(VideoAnswerLayout);