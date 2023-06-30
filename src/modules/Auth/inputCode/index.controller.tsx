import React, { useEffect, useState, useRef } from 'react';
import AuthLayout from './index.layout';
import { NavigationProps } from '../../../navigation/Stack/routes.types';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../store/storeHook';
import { ConfirmCode, SendVerification } from '../../../store/auth/index.actions';
import { ILoadingProps } from '../../../global/types';

const AuthInputCodeController: React.FC = () => {
  const { goBack, reset } = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();

  const { phone, verificationId } = useAppSelector(state => state.authSlice);

  const [seconds, setSeconds] = useState(60);
  const [code, setCode] = useState<any>("");
  const [loading, setLoading] = useState<ILoadingProps>({ status: false, type: '' });

  const recaptchaVerifier = useRef<any>(null);

  const handleBack = () => {
    goBack();
  }

  const toggleLoading = (status: ILoadingProps) => setLoading(status);

  const resendVerification = async () => {
    dispatch(SendVerification(phone, recaptchaVerifier, () => {
      setSeconds(60);
    }));
  }

  const confirmCode = async () => {
    toggleLoading({ status: true, type: 'fetching' });
    dispatch(ConfirmCode(code, verificationId, toggleLoading));
  }


  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  useEffect(() => {

    if (loading.type === 'continue')
      reset({ index: 0, routes: [{ name: 'BottomTabs' }] });

  }, [loading.type])


  return <AuthLayout
    localState={{
      recaptchaVerifier,
      phone,
      code,
      loading,
      seconds
    }}
    handlers={{
      handleBack,
      confirmCode,
      setCode,
      resendVerification
    }}
  />
}

export default AuthInputCodeController;