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
  codeText: {
    height: 50,
    marginTop: 66
  },
  phoneNumber: {
    fontSize: 24,
    fontWeight: '600'
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 13,
    width: 230,
    height: 50,
    padding: 15,
    marginTop: 30,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center'
  },
  seconds: {
    color: '#9D9D9D',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 7
  },
  resendBox: {
    flexDirection: 'row',
    marginTop: 23
  },
  resendLabel: {
    color: '#1E1E1E',
    fontSize: 14,
  },
  buttonResendLabel: {
    color: '#1E1E1E',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5
  }
})

export default styles;