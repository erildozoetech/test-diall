import React, { useState, useRef, useEffect } from 'react';
import AuthLayout from './index.layout';
import { NavigationProps } from '../../../navigation/Stack/routes.types';
import { useNavigation } from '@react-navigation/native';
import { ILoadingProps } from '../../../global/types';
import { useAppDispatch } from '../../../store/storeHook';
import { SendVerification } from '../../../store/auth/index.actions';

const AuthInputPhoneController: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>();

  const dispatch = useAppDispatch();

  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<ILoadingProps>({ status: false, type: '' })
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const recaptchaVerifier = useRef<any>(null);

  const toggleLoading = (status: ILoadingProps) => setLoading(status);

  const handleVerification = () => {
    toggleLoading({ status: true, type: 'fetching' });
    dispatch(SendVerification(phone, recaptchaVerifier, toggleLoading));
  }

  const handleNavigate = () => {
    navigate('InputCode');
  }

  useEffect(() => {
    if (phone.length < 10) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }

  }, [phone])

  useEffect(() => {
    if (loading.type === 'continue') {
      handleNavigate();
    }

  }, [loading.type])

  return <AuthLayout
    localState={{
      buttonDisabled,
      loading,
      phone,
      recaptchaVerifier
    }}
    handlers={{
      handleVerification,
      setPhone,
      handleNavigate
    }}
  />
}

export default AuthInputPhoneController;