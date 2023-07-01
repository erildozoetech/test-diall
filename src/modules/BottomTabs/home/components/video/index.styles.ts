import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black'
  },
  video: {
    flex: 1,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoInfoBox: {
    position: 'absolute',
    bottom: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  videoOwnerLabel: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  videoTitle: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 16
  }
})

export default styles;