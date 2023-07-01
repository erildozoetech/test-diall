import React, { useCallback, useEffect, useState } from 'react';
import ProfileLayout from './index.layout';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../../navigation/Stack/routes.types';
import { ILoadingProps } from '../../../../global/types';
import { useAppDispatch, useAppSelector } from '../../../../store/storeHook';
import { IVideoAnsweredProps } from '../../../../store/videos/index.types';
import { Share } from 'react-native';
import { GetVideosAnswered } from '../../../../store/videos/index.actions';

const ProfileController: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();

  const { videosAnswered } = useAppSelector(state => state.videosSlice);

  const [loading, setLoading] = useState({ status: true, type: 'fetching' });

  const toggleLoading = (status: ILoadingProps) => setLoading(status);

  const handleNavigateToVideo = (video: IVideoAnsweredProps) => {
    navigate('VideoAnswered', { video });
  }

  const handleGetVideosAnswered = () => {
    dispatch(GetVideosAnswered(toggleLoading));
  }

  useFocusEffect(useCallback(() => {
    handleGetVideosAnswered();
  }, []))


  return <ProfileLayout
    globalState={{
      videosAnswered
    }}
    localState={{
      loading
    }}
    handlers={{
      handleNavigateToVideo
    }}

  />
}

export default ProfileController;