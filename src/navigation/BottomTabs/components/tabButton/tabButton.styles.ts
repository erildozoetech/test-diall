import { StyleSheet } from 'react-native';
import { paddingBottomSpace } from '../../../../global/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: paddingBottomSpace,
  },
  boxIconLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIcon: {
    height: 56,
    width: 56,
    borderRadius: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6633',
    top: -25,
    zIndex: 2,
    elevation: 2,
  },
  routeLabel: {
    fontSize: 10,
    color: '#FFFFFF',
    marginTop: 2,
    fontWeight: '500'
  }
});

export default styles;
