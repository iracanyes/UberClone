/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  orders?: ModelOrderConnection | null,
  car?: Car | null,
  userPlaces?: ModelUserPlaceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  createdAt: string,
  type: string,
  status?: string | null,
  originLatitude: number,
  originLongitude: number,
  destLatitude: number,
  destLongitude: number,
  userId: string,
  user?: User | null,
  carId: string,
  car?: Car | null,
  updatedAt: string,
};

export type Car = {
  __typename: "Car",
  id: string,
  type: string,
  latitude?: number | null,
  longitude?: number | null,
  heading?: number | null,
  isActive?: boolean | null,
  orders?: ModelOrderConnection | null,
  userId: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserPlaceConnection = {
  __typename: "ModelUserPlaceConnection",
  items?:  Array<UserPlace | null > | null,
  nextToken?: string | null,
};

export type UserPlace = {
  __typename: "UserPlace",
  id: string,
  description: string,
  userID: string,
  user?: User | null,
  placeID: string,
  place?: Place | null,
  createdAt: string,
  updatedAt: string,
};

export type Place = {
  __typename: "Place",
  id: string,
  latitude: number,
  longitude: number,
  usersPlace?: ModelUserPlaceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCarInput = {
  id?: string | null,
  type: string,
  latitude?: number | null,
  longitude?: number | null,
  heading?: number | null,
  isActive?: boolean | null,
  userId: string,
};

export type ModelCarConditionInput = {
  type?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  heading?: ModelFloatInput | null,
  isActive?: ModelBooleanInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCarConditionInput | null > | null,
  or?: Array< ModelCarConditionInput | null > | null,
  not?: ModelCarConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCarInput = {
  id: string,
  type?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  heading?: number | null,
  isActive?: boolean | null,
  userId?: string | null,
};

export type DeleteCarInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  createdAt?: string | null,
  type: string,
  status?: string | null,
  originLatitude: number,
  originLongitude: number,
  destLatitude: number,
  destLongitude: number,
  userId: string,
  carId: string,
};

export type ModelOrderConditionInput = {
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  status?: ModelStringInput | null,
  originLatitude?: ModelFloatInput | null,
  originLongitude?: ModelFloatInput | null,
  destLatitude?: ModelFloatInput | null,
  destLongitude?: ModelFloatInput | null,
  userId?: ModelIDInput | null,
  carId?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type UpdateOrderInput = {
  id: string,
  createdAt?: string | null,
  type?: string | null,
  status?: string | null,
  originLatitude?: number | null,
  originLongitude?: number | null,
  destLatitude?: number | null,
  destLongitude?: number | null,
  userId?: string | null,
  carId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreatePlaceInput = {
  id?: string | null,
  latitude: number,
  longitude: number,
};

export type ModelPlaceConditionInput = {
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceInput = {
  id: string,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateUserPlaceInput = {
  id?: string | null,
  description: string,
  userID: string,
  placeID: string,
};

export type ModelUserPlaceConditionInput = {
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelUserPlaceConditionInput | null > | null,
  or?: Array< ModelUserPlaceConditionInput | null > | null,
  not?: ModelUserPlaceConditionInput | null,
};

export type UpdateUserPlaceInput = {
  id: string,
  description?: string | null,
  userID?: string | null,
  placeID?: string | null,
};

export type DeleteUserPlaceInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  heading?: ModelFloatInput | null,
  isActive?: ModelBooleanInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCarFilterInput | null > | null,
  or?: Array< ModelCarFilterInput | null > | null,
  not?: ModelCarFilterInput | null,
};

export type ModelCarConnection = {
  __typename: "ModelCarConnection",
  items?:  Array<Car | null > | null,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  status?: ModelStringInput | null,
  originLatitude?: ModelFloatInput | null,
  originLongitude?: ModelFloatInput | null,
  destLatitude?: ModelFloatInput | null,
  destLongitude?: ModelFloatInput | null,
  userId?: ModelIDInput | null,
  carId?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items?:  Array<Place | null > | null,
  nextToken?: string | null,
};

export type ModelUserPlaceFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelUserPlaceFilterInput | null > | null,
  or?: Array< ModelUserPlaceFilterInput | null > | null,
  not?: ModelUserPlaceFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCarMutationVariables = {
  input: CreateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type CreateCarMutation = {
  createCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCarMutationVariables = {
  input: UpdateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type UpdateCarMutation = {
  updateCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCarMutationVariables = {
  input: DeleteCarInput,
  condition?: ModelCarConditionInput | null,
};

export type DeleteCarMutation = {
  deleteCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserPlaceMutationVariables = {
  input: CreateUserPlaceInput,
  condition?: ModelUserPlaceConditionInput | null,
};

export type CreateUserPlaceMutation = {
  createUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserPlaceMutationVariables = {
  input: UpdateUserPlaceInput,
  condition?: ModelUserPlaceConditionInput | null,
};

export type UpdateUserPlaceMutation = {
  updateUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserPlaceMutationVariables = {
  input: DeleteUserPlaceInput,
  condition?: ModelUserPlaceConditionInput | null,
};

export type DeleteUserPlaceMutation = {
  deleteUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCarQueryVariables = {
  id: string,
};

export type GetCarQuery = {
  getCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarConnection",
    items?:  Array< {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      createdAt: string,
      type: string,
      status?: string | null,
      originLatitude: number,
      originLongitude: number,
      destLatitude: number,
      destLongitude: number,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      carId: string,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items?:  Array< {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserPlaceQueryVariables = {
  id: string,
};

export type GetUserPlaceQuery = {
  getUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserPlacesQueryVariables = {
  filter?: ModelUserPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPlacesQuery = {
  listUserPlaces?:  {
    __typename: "ModelUserPlaceConnection",
    items?:  Array< {
      __typename: "UserPlace",
      id: string,
      description: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      placeID: string,
      place?:  {
        __typename: "Place",
        id: string,
        latitude: number,
        longitude: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPlaces?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCarSubscription = {
  onCreateCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCarSubscription = {
  onUpdateCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCarSubscription = {
  onDeleteCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isActive?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt: string,
        type: string,
        status?: string | null,
        originLatitude: number,
        originLongitude: number,
        destLatitude: number,
        destLongitude: number,
        userId: string,
        carId: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    createdAt: string,
    type: string,
    status?: string | null,
    originLatitude: number,
    originLongitude: number,
    destLatitude: number,
    destLongitude: number,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId: string,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isActive?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    latitude: number,
    longitude: number,
    usersPlace?:  {
      __typename: "ModelUserPlaceConnection",
      items?:  Array< {
        __typename: "UserPlace",
        id: string,
        description: string,
        userID: string,
        placeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserPlaceSubscription = {
  onCreateUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserPlaceSubscription = {
  onUpdateUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserPlaceSubscription = {
  onDeleteUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    description: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      car?:  {
        __typename: "Car",
        id: string,
        type: string,
        latitude?: number | null,
        longitude?: number | null,
        heading?: number | null,
        isActive?: boolean | null,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPlaces?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    placeID: string,
    place?:  {
      __typename: "Place",
      id: string,
      latitude: number,
      longitude: number,
      usersPlace?:  {
        __typename: "ModelUserPlaceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
