import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 147,
    width: 107,
    maxWidth: 107,
    margin: 5,
    borderRadius: 10,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    borderRadius: 10
  },
  bgImage: {
    flex: 1,
    height: 147,
    width: 107,
    padding: 10,
    justifyContent: 'flex-end',
  },
  title: {
    position: 'absolute',
    fontSize: 14,
    color: '#fff',
    zIndex: 2,
    bottom: 10,
    left: 10,
    fontWeight: '500',
    flex: 1,
    width: '80%',
  }
})

export default styles;