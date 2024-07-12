import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { data } from '@/constants/data'
import CategoryItem from './CategoryItem'
import { wp } from '@/helpers/commos'

const Categories = () => {
  return (
    <FlatList
    horizontal
    contentContainerStyle={styles.flatlist}
    showsHorizontalScrollIndicator={false}
    data={data.categories}
    keyExtractor={item=>item}
    renderItem={({item,index})=><CategoryItem title={item} index={index}/> }
    />
  )
}

export default Categories

const styles = StyleSheet.create({
    flatlist:{
        paddingHorizontal:wp(4),
        gap:8
    }
})