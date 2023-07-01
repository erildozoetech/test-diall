import { StyleSheet } from "react-native";
import { paddingTopSpace } from "../../../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: paddingTopSpace,
    paddingHorizontal: 20
  },
  loadingBox: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
  },
  titleWrapper: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4'
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  }
})

export default styles;