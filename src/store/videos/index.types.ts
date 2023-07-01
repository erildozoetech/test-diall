export interface IVideosSliceProps {
  videos: IVideoProps[];
  videosAnswered: IVideoAnsweredProps[];
}

export interface IVideoProps {
  id: string;
  poster: string;
  owner: string;
  title: string;
  uri: string;
}

export interface IVideoAnsweredProps {
  id: string;
  poster: string;
  owner: string;
  title: string;
  uri: string;
  userUid: string;
}