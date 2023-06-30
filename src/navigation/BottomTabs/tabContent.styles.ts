import { Dimensions, StyleSheet } from 'react-native';

import { paddingBottomSpace } from '../../global/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '3%',
    backgroundColor: '#121212',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  iconsBox: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    bottom: paddingBottomSpace,
    zIndex: 1,
    elevation: 1,
  },
  bottom: {
    height: paddingBottomSpace,
    backgroundColor: '#009933',
  },
});

export default styles;
