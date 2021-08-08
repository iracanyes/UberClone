import { CognitoUser } from "amazon-cognito-identity-js";

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
