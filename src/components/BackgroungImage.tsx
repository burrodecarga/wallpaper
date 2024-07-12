import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BackgroungImage = ({image}:{image:ImageSourcePropType}) => {
  return (
    <Image source={ image}
    style={styles.backgroungImage}
    />
  )
}

export default BackgroungImage

const styles = StyleSheet.create({
    backgroungImage:{
      width:'100%',
      height:'100%',
      position:'absolute'
    }
})