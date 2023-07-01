import React from 'react';
import VideoAnswerLayout from './index.layout';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../../navigation/Stack/routes.types';
import { TVideoAnswerControllerRouteProps } from './index.types';
import { Share } from 'react-native';
import { IVideoAnsweredProps } from '../../../../store/videos/index.types';

const VideoAnswerController: React.FC<TVideoAnswerControllerRouteProps> = ({ route }) => {
  const { goBack } = useNavigation<NavigationProps>();

  const { video } = route.params;

  const handleBack = () => {
    goBack();
  }

  const handleShareVideo = (video: IVideoAnsweredProps) => {
    Share.share({
      message: JSON.stringify(video.uri),
    })
      .then((result) => console.log(result))
      .catch((errorMsg) => console.log(errorMsg));
  }

  return <VideoAnswerLayout
    localState={{
      video,
    }}
    handlers={{
      handleBack,
      handleShareVideo
    }}
  />
}

export default VideoAnswerController;