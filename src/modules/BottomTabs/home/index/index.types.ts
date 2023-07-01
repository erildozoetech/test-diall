import { ILoadingProps } from "../../../../global/types";
import { IVideoProps } from "../../../../store/videos/index.types";

export interface IHomeLayoutProps {
  globalState: {
    videos: IVideoProps[];
  }
  localState: {
    loading: ILoadingProps;
  }
  handlers: {
    handleShareVideo: (item: IVideoProps) => void;
  }
}