import { AppThunk } from "..";
import { ILoadingProps } from "../../global/types";
import {
  query,
  collection,
  getFirestore,
  getDocs
} from 'firebase/firestore';
import { setVideosInfo } from "./index.slice";

const db = getFirestore();

export const GetVideos = (callback: (status: ILoadingProps) => void): AppThunk => {
  return async (dispatch) => {
    try {

      const q = query(collection(db, "videos"));

      const querySnapshot = await getDocs(q);

      let videos: any = [];

      querySnapshot.forEach((doc) => {
        videos.push(doc.data());
      });

      dispatch(setVideosInfo({ videos }));
      callback({ status: false, type: '' })

    } catch (error) {
      callback({ status: false, type: 'error_on_load_videos' })
    }
  }
}

export const GetVideosAnswered = (callback: (status: ILoadingProps) => void): AppThunk => {
  return async (dispatch) => {
    try {

      const q = query(collection(db, "video-answers"));

      const querySnapshot = await getDocs(q);

      let videosAnswered: any = [];

      querySnapshot.forEach((doc) => {
        videosAnswered.push(doc.data());
      });

      dispatch(setVideosInfo({ videosAnswered }));
      callback({ status: false, type: '' })

    } catch (error) {
      callback({ status: false, type: 'error_on_load_videos_answers' })
    }
  }
}