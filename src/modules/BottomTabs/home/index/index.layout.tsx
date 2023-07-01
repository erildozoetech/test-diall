import React, { useRef } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import styles from './index.styles';
import SingleVideo from '../components/video';
import { IHomeLayoutProps } from './index.types';
import { IVideoProps } from '../../../../store/videos/index.types';

const HomeLayout: React.FC<IHomeLayoutProps> = ({
  globalState,
  localState,
  handlers
}) => {

  const { videos } = globalState;
  const { loading } = localState;
  const { handleShareVideo } = handlers;

  const mediaRefs: any = useRef([]);

  const onVieweableItemsChanged: any = useRef(({ changed }: any) => {
    changed.forEach((element: any) => {
      const cell: any = mediaRefs.current[element.index];
      if (cell) {
        if (element.isViewable) {
          cell.play();
        }
        else {
          cell.stop();
        }
      }
    })
  })


  const renderItem = ({ item, index }: { item: IVideoProps, index: number }) => {
    return (
      <SingleVideo ref={PostSingleRef => (mediaRefs.current[index] = PostSingleRef)} item={item} handleShareVideo={handleShareVideo} />
    )
  }

  return (
    <View style={styles.container}>

      {loading.status ?
        <View style={styles.loadingBox}>
          <ActivityIndicator size={'large'} color={'#fff'} />
        </View>
        :
        <FlatList
          pagingEnabled
          data={videos}
          style={styles.flatList}
          renderItem={renderItem}
          onViewableItemsChanged={onVieweableItemsChanged.current}
          windowSize={4}
          maxToRenderPerBatch={2}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 100
          }}
        />
      }

    </View>
  )
}

export default HomeLayout;