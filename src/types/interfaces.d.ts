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
  id: string;
  createdAt: string;
  type: string;
  status: string;
  originLatitude: number;
  originLongitude: number;
  destLatitude: number;
  destLongitude: number;

  userId: string;
  user: IUser;
  carId: string;
  car: ICar;
}

export interface IUser {
  id?: string;
  username: string;
  image?: string;
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

export interface IGooglePlacesInput {
  placeholder: string;
  autoFocus?: boolean;
  fetchDetails?: boolean;
  styles?: any;
  setPlaceInfo: Dispatch<
    SetStateAction<Record<string, unknown> | null>
  >;
  currentLocation: boolean;
  currentLocationLabel: string;
}

export interface IPlaceRow {
  data: any;
  index: number;
};

export interface IDrawerContent {
  state: any;
  navigation: any;
  descriptors: any;
  progress?: any;
}

export interface ISearchResultMap {
  cars: ICar[];
}
