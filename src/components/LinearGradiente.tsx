import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import { hp, wp } from '@/helpers/commos'

const Gradiente = () => {
  return (
  

      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)','white','white']}
        style={styles.gradiente}
        start={{x:0.5,y:0}}
        end={{x:0.5, y:0.8}}
       
      />
  
    
  )
}

export default Gradiente

const styles = StyleSheet.create({
    gradiente:{
        width:wp(100),
        height:hp(65),       
    }
})