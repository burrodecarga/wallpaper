import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { hp, wp } from '@/helpers/commos';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
        <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
        </View>
        <TextInput style={styles.inputText} placeholder='Buscar Pintura'/>  
        <View style={styles.searchIcon}>
        <Feather name="x-circle" size={24} color={theme.colors.neutral(0.4)} />
        </View>
        
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar:{
        marginHorizontal:wp(4),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:theme.colors.grayBG,
        backgroundColor:theme.colors.white,
        padding:6,
        paddingLeft:10,
        borderRadius:theme.radius.md

    },
    searchIcon:{
        padding:8
    },
    inputText:{
        flex:1,
        borderRadius:theme.radius.sm,
        paddingVertical:10,
        fontSize:hp(1.8)
    }
})