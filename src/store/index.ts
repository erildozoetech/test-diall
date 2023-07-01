import {
  AnyAction,
  configureStore,
  ThunkAction,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authSlice from './auth/index.slice';
import userSlice from './user/index.slice';
import videosSlice from './videos/index.slice';

const reducers = combineReducers({
  authSlice,
  userSlice,
  videosSlice
});


export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true
    }
  }).concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction>