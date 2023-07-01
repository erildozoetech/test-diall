import { IVideoAnsweredProps, IVideoProps, IVideosSliceProps } from './index.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IVideosSliceProps = {
  videos: [],
  videosAnswered: [],
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideosInfo: (state: IVideosSliceProps, action) => {
      const properties = action.payload as IVideosSliceProps;
      const newState = properties;
      const values = Object.keys(properties) as Array<keyof typeof properties>;
      for (const key of values) {
        state[key] = newState[key] as IVideoProps[] & IVideoAnsweredProps[];
      }
    }
  }
});

export const { setVideosInfo } = videosSlice.actions;
export default videosSlice.reducer;
