import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { getImageSize, hp, wp } from "@/helpers/commos";
import { ImageProps } from "@/constants/data";
import { theme } from "@/constants/theme";

type imageCardProps = {
  item: ImageProps;
  index: number;
  columns:number;
};

const ImageCard = ({ item, index,columns=2 }: imageCardProps) => {
  const getDinamicH = () => {
    let { imageWidth: width, imageHeight: height } = item;
    return (height = getImageSize(width!, height!));
  };

 const isLastRow = ()=>{
 return (index+1)% columns ===0
 } 
  return (
    <Pressable key={index} style={[styles.imgContainer, styles.spacing]}>
      <Image
        source={{ uri: item?.webformatURL }}
        contentFit="cover"
        transition={100}
        style={[styles.img, { height: getDinamicH() }]}
      />
    </Pressable>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: theme.colors.grayBG,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    marginBottom: wp(2),
    borderCurve: "continuous",
  },
  spacing: { marginRight: wp(2) },

  img: {
    height: 300,
    width: "100%",
  },
});
