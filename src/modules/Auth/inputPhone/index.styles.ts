import { StyleSheet } from "react-native";
import { paddingBottomSpace, paddingTopSpace } from "../../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: paddingTopSpace,
    paddingBottom: paddingBottomSpace
  },
  loginText: {
    height: 75,
    width: 241,
    marginTop: 66
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    width: 230,
    height: 50,
    padding: 15,
    marginTop: 30,
    fontSize: 22,
    fontWeight: '500'
  },
  warningMessage: {
    color: '#898989',
    fontSize: 14,
    marginTop: 23
  }
})

export default styles;