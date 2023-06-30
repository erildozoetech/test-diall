import { IAuthSliceProps } from './index.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAuthSliceProps = {
  phone: '',
  verificationId: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state: IAuthSliceProps, action) => {
      const properties = action.payload as IAuthSliceProps;
      const newState = properties;
      const values = Object.keys(properties) as Array<keyof typeof properties>;
      for (const key of values) {
        state[key] = newState[key];
      }
    }
  }
});

export const { setAuthInfo } = authSlice.actions;
export default authSlice.reducer;
