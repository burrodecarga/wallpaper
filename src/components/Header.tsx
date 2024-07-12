import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FontAwesome6 } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { hp, wp } from '@/helpers/commos';

const HeaderScreen = () => {

    

  return (
   
      <View style={styles.header}>
        <TouchableOpacity>
            <Text style={styles.title}>Pixels</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome6 name="bars-staggered" size={22} color={theme.colors.neutral(0.7)} />
        </TouchableOpacity>
      </View>
    
  )
}

export default HeaderScreen

const styles = StyleSheet.create({
   
    header:{
        marginHorizontal:wp(4),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:hp(4),
        fontWeight:'semibold',
        color:theme.colors.neutral(0.9)
    }
})