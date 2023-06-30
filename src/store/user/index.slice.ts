import { IUserSliceProps } from './index.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUserSliceProps = {
  uid: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state: IUserSliceProps, action) => {
      const properties = action.payload as IUserSliceProps;
      const newState = properties;
      const values = Object.keys(properties) as Array<keyof typeof properties>;
      for (const key of values) {
        state[key] = newState[key];
      }
    }
  }
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
