import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack initialRouteName='home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='home'/>

    </Stack>
  )
}

export default RootLayout