import React from 'react';
import styles from './index.styles';
import { Image, Text, View, TextInput } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import { firebaseConfig } from '../../../services/firebase';
import { IAuthLayoutProps } from './index.types';
import AuthHeader from '../components/header';
import AuthButton from '../components/button';
import loginText from '../../../assets/images/loginText.png';

const AuthLayout: React.FC<IAuthLayoutProps> = ({ handlers, localState }) => {

  const {
    handleVerification,
    setPhone,
  } = handlers;

  const {
    buttonDisabled,
    loading,
    recaptchaVerifier,
    phone,
  } = localState;

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />

      <AuthHeader />

      <Image
        source={loginText}
        style={styles.loginText}
        resizeMode='contain'
      />

      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Enter phone number"
        style={styles.textInput}
        keyboardType='phone-pad'
      />

      <Text style={styles.warningMessage}>
        By continuing, you agree to Diall's Terms of{"\n"}Service. Message and data rates may aplly.
      </Text>

      <AuthButton
        label="Log in"
        handlePress={handleVerification}
        customContainerStyle={{ marginTop: 43 }}
        loading={loading.status}
        disabled={buttonDisabled}
      />
    </View>
  )
}

export default AuthLayout;