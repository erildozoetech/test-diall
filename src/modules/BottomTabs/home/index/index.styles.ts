import { Dimensions, StyleSheet } from "react-native";
import { paddingTopSpace } from "../../../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingBox: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    backgroundColor: '#000'
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
})

export default styles;