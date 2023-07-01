import { ILoadingProps } from "../../../../global/types";
import { IVideoAnsweredProps } from "../../../../store/videos/index.types";

export interface IProfileLayoutProps {
  globalState: {
    videosAnswered: IVideoAnsweredProps[];
  }
  localState: {
    loading: ILoadingProps
  }
  handlers: {
    handleNavigateToVideo: (video: IVideoAnsweredProps) => void;
  }
}