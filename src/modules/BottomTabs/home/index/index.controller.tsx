import React, { useCallback, useEffect, useState } from 'react';
import HomeLayout from './index.layout';
import { useAppDispatch, useAppSelector } from '../../../../store/storeHook';
import { ILoadingProps } from '../../../../global/types';
import { GetVideos } from '../../../../store/videos/index.actions';
import { IVideoProps } from '../../../../store/videos/index.types';
import { Share } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const HomeController: React.FC = () => {

  const dispatch = useAppDispatch();

  const { videos } = useAppSelector(state => state.videosSlice);

  const [loading, setLoading] = useState({ status: true, type: 'fetching' });

  const toggleLoading = (status: ILoadingProps) => setLoading(status);

  const handleGetVideos = async () => {
    dispatch(GetVideos(toggleLoading));
  }

  const handleShareVideo = (video: IVideoProps) => {
    Share.share({
      message: JSON.stringify(video.uri),
    })
      .then((result) => console.log(result))
      .catch((errorMsg) => console.log(errorMsg));
  }

  useFocusEffect(useCallback(() => {
    handleGetVideos();
  }, []))

  return <HomeLayout
    globalState={{
      videos
    }}
    localState={{
      loading
    }}
    handlers={{
      handleShareVideo
    }}
  />
}

export default HomeController;