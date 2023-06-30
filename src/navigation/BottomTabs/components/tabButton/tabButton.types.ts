export interface TabButtonPropTypes {
  key: number;
  status: boolean;
  routeName: string;
  press: (isCartRoute?: boolean) => void;
}
