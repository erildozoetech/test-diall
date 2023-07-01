import { Alert } from 'react-native';
import { AppThunk } from "..";
import { ILoadingProps } from "../../global/types";
import { setAuthInfo } from "./index.slice";
import firebase from 'firebase/compat/app';
import { setUserInfo } from '../user/index.slice';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore';

const db = getFirestore();

export const SendVerification = (phone: string, recaptchaVerifier: any, callback: (status: ILoadingProps) => void): AppThunk => {
  return (dispatch) => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      ).then((verificationId) => {
        dispatch(setAuthInfo({ phone, verificationId }));
        callback({ status: false, type: 'continue' });
      }).catch((error) => {
        if (error.code !== 'ERR_FIREBASE_RECAPTCHA_CANCEL')
          Alert.alert("Oops!", "There was an error validating your phone number. Please try again.");
        callback({ status: false, type: '' });
      })
    } catch (error) {
      console.log(error);

    }
  }
}

export const ConfirmCode = (code: string, verificationId: string, callback: (status: ILoadingProps) => void): AppThunk => {
  return async (dispatch) => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
      await firebase.auth().signInWithCredential(credential).then(async (result: any) => {
        const uid = result.user.uid;

        const docRef = doc(db, 'users', uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          dispatch(setUserInfo({ uid }))
        } else {
          await setDoc(doc(db, "users", uid), { uid });
        }

        callback({ status: false, type: 'continue' });
      }).catch((error) => {
        alert(error);
      })
    } catch (error) {
      console.log(error);

    }
  }
}