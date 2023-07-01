import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import styles from './index.styles';
import { Video, ResizeMode } from 'expo-av';
import { View, Text, TouchableOpacity } from 'react-native';
import IconSvg from '../../../../../global/components/iconSvg/iconSvg.component';
import { IVideoProps } from '../../../../../store/videos/index.types';

interface IProps {
  item: IVideoProps;
  handleShareVideo: (item: IVideoProps) => void;
}
const SingleVideo = forwardRef(({ item, handleShareVideo }: IProps, parentRef) => {
  const videoRef: any = useRef(null);

  const play = async () => {
    if (videoRef.current == null) {
      return;
    }

    const status = await videoRef.current.getStatusAsync();

    if (status?.isPlaying) {
      return;
    }

    try {
      await videoRef.current.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  const stop = async () => {
    if (videoRef.current == null) {
      return;
    }

    const status = await videoRef.current.getStatusAsync();

    if (!status?.isPlaying) {
      return;
    }

    try {
      await videoRef.current.stopAsync();
    } catch (error) {
      console.log(error);

    }
  }

  const unload = async () => {
    if (videoRef.current == null) {
      return;
    }

    try {
      await videoRef.current.unloadAsync();
    } catch (error) {
      console.log(error);
    }
  }

  useImperativeHandle(parentRef, () => ({
    play,
    stop,
    unload
  }))

  useEffect(() => {
    return () => {
      unload();
    }
  }, [])

  return (
    <View
      style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: item.uri }}
        style={styles.video}
        shouldPlay={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        usePoster
        useNativeControls
        posterSource={{ uri: item.poster }}
        posterStyle={{ resizeMode: 'cover', height: '100%' }}
      />

      <View style={styles.videoInfoBox}>
        <View>
          <Text style={styles.videoOwnerLabel}>{item.owner}</Text>
          <Text style={styles.videoTitle}>{item.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleShareVideo(item)}>
          <IconSvg
            name='share'
            height={45}
            width={45}
          />
        </TouchableOpacity>
      </View>
    </View>

  )
});

export default React.memo(SingleVideo);