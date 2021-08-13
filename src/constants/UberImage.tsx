import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import Comfort from "../assets/images/Comfort.jpeg";
import UberX from "../assets/images/UberX.jpeg";
import UberXL from "../assets/images/UberXL.jpeg";
import UberVan from "../assets/images/UberVan.webp";
import MapUberX from "../assets/images/top-UberX.png";
import MapUberXL from "../assets/images/top-UberXL.png";
import MapUberVan from "../assets/images/top-UberVan.png";
import MapUberComfort from "../assets/images/top-Comfort.png";


interface IUberImage {
  type: string;
}

const UberImage = (props: IUberImage) => {
  const { type = "" } = props;
  const [image, setImage] = useState();

  useEffect(() => {
    if (type.length > 0) {
      switch (type) {
        case "Uber X":
          setImage(UberX);
          break;
        case "Uber XL":
          setImage(UberXL);
          break;
        case "Uber Van":
          setImage(UberVan);
          break;
        case "Comfort":
          setImage(Comfort);
          break;
      }
    }
  }, [type]);

  return (
    <Avatar.Image
      size={24}
      source={
        image ? image : { uri: "https://loremflickr.com/640/480/car" }
      }
    />
  );
};

export const getImage = (type: string) => {
  let result = null;
  switch (type) {
    case "UberX":
      result = MapUberX;
      break;
    case "UberXL":
      result = MapUberXL;
      break;
    case "UberVan":
      result = MapUberVan;
      break;
    case "Comfort":
      result = MapUberComfort;
      break;
    default:
      break;
  }

  return result;
};

export default UberImage;
