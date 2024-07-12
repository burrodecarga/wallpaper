import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MasonryFlashList } from "@shopify/flash-list";
import { wp } from '@/helpers/commos';
import ImageCard from './ImageCard';
import { ImageProps } from '@/constants/data';


const ImagesGrid = ({images}:{images:ImageProps[]}) => {
  //console.log(images[0],'XXXX')
    return (
        <View style={styles.container}>
            <MasonryFlashList
            contentContainerStyle={styles.contentConteiner}        
            data={images}
            numColumns={2}
            renderItem={({ item,index }) => <ImageCard item={item} index={index} columns={2}/>}
            estimatedItemSize={200}
            />
            </View>
  )
}

export default ImagesGrid

const styles = StyleSheet.create({
    container:{
minHeight:3,
width:wp(100),
marginHorizontal:wp(1)
    },
    contentConteiner:{

    }
})