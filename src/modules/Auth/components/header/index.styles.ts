import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonBackLabel: {
    color: '#007AFF',
    fontSize: 18,
    marginLeft: 8
  }
})

export default styles;