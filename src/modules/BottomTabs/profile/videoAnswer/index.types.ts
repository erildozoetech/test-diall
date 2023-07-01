import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IVideoAnsweredProps, IVideoProps } from "../../../../store/videos/index.types";
import { StackTypesList } from "../../../../navigation/Stack/routes.types";

export interface IVideoAnswerLayoutProps {
  localState: {
    video: IVideoAnsweredProps;
  }
  handlers: {
    handleBack: () => void;
    handleShareVideo: (item: IVideoAnsweredProps) => void;
  }
}

export type TVideoAnswerControllerRouteProps = NativeStackScreenProps<
  StackTypesList,
  'VideoAnswered'
>;