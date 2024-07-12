import { Dimensions } from "react-native";

export const WIDTH = Dimensions.get("screen").width;
export const HEIGTH = Dimensions.get("screen").height;

export const wp = (porcentage: number) => {
  return (WIDTH * porcentage) / 100;
};

export const hp = (porcentage: number) => {
  return (HEIGTH * porcentage) / 100;
};

export const getImageSize = (w: number, h: number): number => {
  if (w > h) {
    return 250;
  } else if (h > w) {
    return 300;
  } else {
    return 200;
  }
};
