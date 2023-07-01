import { Dimensions, StyleSheet } from "react-native";
import { paddingTopSpace } from "../../../../global/styles";

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
  header: {
    position: 'absolute',
    top: paddingTopSpace,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoInfoBox: {
    position: 'absolute',
    bottom: 50,
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