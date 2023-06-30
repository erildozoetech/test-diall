import React from 'react';
import styles from './index.styles';
import { Image, Text, View, TextInput } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import { firebaseConfig } from '../../../services/firebase';
import { IAuthLayoutProps } from './index.types';
import AuthHeader from '../components/header';
import AuthButton from '../components/button';
import codeText from '../../../assets/images/codeText.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AuthLayout: React.FC<IAuthLayoutProps> = ({ handlers, localState }) => {

  const {
    handleBack,
    confirmCode,
    resendVerification,
    setCode,
  } = handlers;

  const {
    recaptchaVerifier,
    phone,
    code,
    seconds,
    loading
  } = localState;

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />

      <AuthHeader buttonBack={handleBack} />

      <Image
        source={codeText}
        style={styles.codeText}
        resizeMode='contain'
      />

      <Text style={styles.phoneNumber}>To {phone} ?</Text>

      <TextInput
        value={code}
        onChangeText={(text) => setCode(text)}
        placeholder="000-000"
        style={styles.textInput}
        keyboardType='number-pad'
      />

      {seconds > 0 ?
        <Text style={styles.seconds}>
          {seconds} seconds
        </Text> :
        <View style={styles.resendBox}>
          <Text style={styles.resendLabel}>
            Didn't get it?
          </Text>
          <TouchableOpacity onPress={resendVerification}>
            <Text style={styles.buttonResendLabel}>
              RESEND CODE
            </Text>
          </TouchableOpacity>
        </View>
      }

      <AuthButton
        label="Let's go 🎉"
        handlePress={confirmCode}
        customContainerStyle={{ marginTop: 43 }}
        loading={loading.status}
        disabled={code.length < 6}
      />
    </View>
  )
}

export default AuthLayout;