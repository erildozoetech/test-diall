import {
  doc,
  getDoc,
  onSnapshot,
  query,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { AppThunk } from '..';
import db, { firebaseAuth, firebaseFunctions } from '~/services/firebaseConn';
import { HttpsCallableResult, httpsCallable } from 'firebase/functions';
import { ILoadingProps } from '~/global/types';
import { setUserInfo } from './index.reducer';
import moment from 'moment';
import { setErrorMessage } from '../errors/index.reducer';

export const checkIfUserExists = (
  email: string,
  callback: (status: ILoadingProps) => void,
): AppThunk => {
  return dispatch => {
    try {
      httpsCallable(
        firebaseFunctions,
        'checkEmailExists',
      )({ email }).then((res: HttpsCallableResult<any>) => {
        console.log(res.data, 'res');
        const { data } = res.data;
        callback({
          status: false,
          type: data.uid ? 'userExists' : 'userDoesNotExist',
        });
      });
    } catch (error) {
      console.log('Error ->', error);
      dispatch(
        setErrorMessage({
          visible: true,
          type: 'generic',
        }),
      );
    }
  };
};

export const FetchSignIn = (
  email: string,
  password: string,
  callback: ({ status, type }: ILoadingProps) => void,
): AppThunk => {
  return async dispatch => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(async userCredential => {
          const user = userCredential.user;

          const docRef = doc(db, 'users', user.uid);

          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            dispatch(setUserInfo({ ...docSnap.data() }));
            callback({ status: true, type: 'loginSuccessfully' });
          } else {
            callback({ status: false, type: 'loginFailed' });
          }
        })
        .catch(error => {
          console.log('error ->', error);

          callback({ status: false, type: 'loginFailed' });
          dispatch(
            setErrorMessage({
              visible: true,
              type: error.code,
            }),
          );
        });
    } catch (error) {
      console.log('Error on catch FetchSignIn', error);
      callback({ status: false, type: 'loginFailed' });
      dispatch(setErrorMessage({
        visible: true,
        type: 'generic'
      }))
    }
  };
};

export const FetchUserData = (
  user: any,
  callback: ({ status, type }: ILoadingProps) => void,
): AppThunk => {
  return async dispatch => {
    try {
      const docRef = doc(db, 'users', user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(setUserInfo({ ...docSnap.data() }));
        callback({ status: true, type: 'loginSuccessfully' });
      } else {
        callback({ status: false, type: 'loginFailed' });
      }
    } catch (error) {
      console.log('Error on catch FetchSignIn', error);
      callback({ status: false, type: 'loginFailed' });
    }
  };
};

export const FetchSignOut = (callback: () => void): AppThunk => {
  return (dispatch) => {
    try {
      signOut(firebaseAuth);
      dispatch(setUserInfo({
        id: '',
        fullName: '',
        email: '',
        createdAt: '',
        updatedAt: '',
        thumb: '',
        zipCode: '',
        address: '',
        addressNumber: '',
        complement: '',
        district: '',
        state: '',
        city: '',
        country: '',
      }))
      callback();
    } catch (error) {
      dispatch(setErrorMessage({
        title: 'Ops! :(',
        isVisible: true,
        description: 'Não foi possível sair do sistema. Por favor, verifique sua conexão com a internet e tente novamente.',
        icon: '',
        confirmation: false,
      }))
    }
  }
}

export const FetchResetPassword = (): AppThunk => {
  return (dispatch, getState) => {
    const { email } = getState().userReducer;
    try {
      sendPasswordResetEmail(firebaseAuth, email);
    } catch (error) {
      dispatch(setErrorMessage({
        title: 'Ops! :(',
        isVisible: true,
        description: 'Não foi possível enviar o email para redefinir a senha. Por favor, verifique sua conexão com a internet e tente novamente.',
        icon: '',
        confirmation: false,
      }))
    }
  }
}


export const FetchRegisterUser = (callback: (status: ILoadingProps) => void): AppThunk => {
  return (dispatch, getState) => {
    try {

      const {
        fullName,
        email,
        password,
        zipCode,
        address,
        addressNumber,
        complement,
        district,
        state,
        city,
        country
      } = getState().userReducer;


      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(async (userCredential) => {

          console.log('user credentials ->', userCredential);
          const user = userCredential.user;

          const userInfo = {
            id: user.uid,
            fullName,
            email,
            thumb: 'https://firebasestorage.googleapis.com/v0/b/economizei-app-23c9d.appspot.com/o/user_default.png?alt=media&token=c802df2b-26ea-4601-a4aa-e6c3fcc2b00e',
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: '',
            zipCode,
            address,
            addressNumber,
            complement,
            district,
            state,
            city,
            country
          }

          await setDoc(doc(db, "users", user.uid), userInfo);

          callback({ status: false, type: 'user_registered_successfully' });
        })
        .catch((error) => {
          console.log('Error on signUp email/password', error);
          callback({ status: false, type: 'user_not_registered' });
        })

    } catch (error) {
      callback({ status: false, type: 'user_not_registered' });
    }
  }
}

// export const FetchEditUser = async (user: IUserRegisterProps, callback: (status: ILoadingProps) => void) => {
//   try {
//     const userId = user.id || ''
//     if (user.thumb?.name) {
//       const storageRef = ref(firebaseStorage, `files/${user.thumb?.name}${new Date()}`);
//       const uploadTask = uploadBytesResumable(storageRef, user.thumb);

//       uploadTask.on("state_changed",
//         () => { },
//         (error) => {
//           console.log('Error on uploadPhoto', error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

//             await updateDoc(doc(db, "users", userId), {
//               fullname: user.fullname,
//               email: user.email,
//               password: user.password,
//               userHierarchy: user.userHierarchy,
//               thumb: downloadURL,
//               active: user.active
//             });

//             callback({ status: false, type: 'user_updated_successfully' });
//           })
//             .catch((err) => {
//               console.log('Error on uploader photo ->', err);
//               callback({ status: false, type: 'user_update_failed' });
//             })
//         }
//       );
//     } else {

//       await updateDoc(doc(db, "users", userId), {
//         fullname: user.fullname,
//         email: user.email,
//         password: user.password,
//         userHierarchy: user.userHierarchy,
//         active: user.active
//       });

//       callback({ status: false, type: 'user_updated_successfully' });
//     }

//   } catch (error) {
//     console.log('Error on catch Edit user ->', error);
//     callback({ status: false, type: 'user_update_failed' });
//   }
// }

// export const FetchSendEmailResetPassword = (email: string, callback: (status: ILoadingProps) => void) => {
//   try {
//     sendPasswordResetEmail(firebaseAuth, email)
//       .then(() => {
//         callback({ status: false, type: 'reset_sent_successfully' });
//       })
//   } catch (error) {
//     console.log('Error on catch Edit user ->', error);
//     callback({ status: false, type: 'reset_sent_successfully' });
//   }
// }

// export const FetchDeleteUser = async (user: IUserRegisterProps, callback: () => void) => {
//   try {
//     const userId = user.id || '';

//     await setDoc(doc(db, "deleted-users", userId), user);
//     await deleteDoc(doc(db, "users", userId));

//     callback();

//   } catch (error) {
//     console.log('Error on catch Delete user ->', error);
//     callback();
//   }
// }
