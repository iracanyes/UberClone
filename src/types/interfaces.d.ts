import { CognitoUser } from "amazon-cognito-identity-js";
import { Dispatch, SetStateAction } from "react";

export interface IUser {
  id?: string;
  username: string;
  image?: string;
}

export interface ICar {
  id: string;
  type: string;
  latitude: number;
  longitude: number;
  heading: number;
  isActive: boolean;

  orders: IOrder[];

  userId: string;
  user: IUser;
}

export interface IOrder {

}

export interface ISection {
  title: string;
  children?: any;
}

export interface IConfirmSignUpRouteProps {
  key: string;
  name: string;
  path?: string;
  params: {
    user: CognitoUser;
    userSub: string;
    email: string;
  };
}

export interface IDropdownPickerItems {
  icon: any;
  label: string;
  value: string;
}

interface IGooglePlacesInput {
  placeholder: string;
  autoFocus?: boolean;
  fetchDetails?: boolean;
  styles?: any;
  setPlaceInfo: Dispatch<SetStateAction<Record<string, unknown>>>;
}

export interface IDrawerContent {
  state: any;
  navigation: any;
  descriptors: any;
  progress?: any;
}

export interface ISearchResultMap {
  cars: ICar[];
}
