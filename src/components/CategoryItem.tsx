import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/commos'
import Animated, { FadeInRight } from 'react-native-reanimated'

const CategoryItem = ({title,index}:{title:string,index:number}) => {

  return (
    <Animated.View key={title} style={styles.container} entering={FadeInRight.delay(index*200).duration(1000).springify().damping(14)}>
        <TouchableOpacity style={styles.categories}>

      <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </Animated.View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({container:{},
categories:{
    padding:12,
    paddingHorizontal:15,
    borderWidth:1,
    borderColor:theme.colors.grayBG,
    backgroundColor:theme.colors.white,
    borderRadius:theme.radius.md

},title:{
    fontSize:hp(1.8),
    fontWeight:'600'
}})