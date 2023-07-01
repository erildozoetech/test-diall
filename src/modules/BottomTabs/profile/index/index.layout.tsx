import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './index.styles';
import { FlatList } from 'react-native';
import Card from '../components/card';
import { IVideoAnsweredProps } from '../../../../store/videos/index.types';
import { IProfileLayoutProps } from './index.types';

const ProfileLayout: React.FC<IProfileLayoutProps> = ({
  globalState,
  localState,
  handlers
}) => {

  const { videosAnswered } = globalState;
  const { loading } = localState;
  const { handleNavigateToVideo } = handlers;

  const renderItem = ({ item }: { item: IVideoAnsweredProps }) => (<Card item={item} handleNavigateToVideo={handleNavigateToVideo} />)

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Answers To My Questions</Text>
      </View>

      {loading.status ?
        <View style={styles.loadingBox}>
          <ActivityIndicator size='large' color='#000' />
        </View>
        :
        <FlatList
          data={videosAnswered}
          renderItem={renderItem}
          numColumns={3}
        />
      }

    </View>
  )
}

export default ProfileLayout;