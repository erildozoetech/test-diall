import React from "react";
import { ILoadingProps } from "../../../global/types";

export interface IAuthLayoutProps {
  localState: {
    buttonDisabled: boolean;
    loading: ILoadingProps;
    phone: string;
    recaptchaVerifier: any;
  }
  handlers: {
    handleVerification: () => void;
    handleNavigate: () => void;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
  }
}