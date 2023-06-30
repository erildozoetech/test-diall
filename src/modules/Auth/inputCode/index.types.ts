import React from "react";
import { ILoadingProps } from "../../../global/types";

export interface IAuthLayoutProps {
  localState: {
    recaptchaVerifier: any;
    phone: string;
    code: string;
    seconds: number;
    loading: ILoadingProps;
  }
  handlers: {
    handleBack: () => void;
    resendVerification: () => void;
    confirmCode: () => void;
    setCode: React.Dispatch<React.SetStateAction<string>>;
  }
}