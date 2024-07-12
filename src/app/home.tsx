import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderScreen from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Categories from '@/components/Categories'
import axios from 'axios'
import ImagesGrid from '@/components/ImagesGrid'
import { ImageProps } from '@/constants/data'

type paramsPro={
  [key: string]: number|string
}
const HomeScreen = () => {
  const [images, setImages] = useState<ImageProps[]>([])
  const {top}= useSafeAreaInsets()
    const paddingTop = top>0? top+10:30
     const API_KEY ='44891003-cbc321fc4025afcfddbe12535'
     const apiURL =`https://pixabay.com/api/?key=${API_KEY}`

     const formatParams =(params:paramsPro)=>{
      let url = apiURL+'&per_page=25&safesearch=true&editors_choice=true'
      if(!params) return url
      let paramsKey = Object.keys(params)
      paramsKey.map((key)=>{
        let value = key=='q'? encodeURIComponent(params[key]):params[key]
        url +=`&${key}=${value}`
      })
      //console.log(url)
      return url
     }

     
     const apiCall = async (params:paramsPro)=>{
      const URLY = formatParams(params)
      //console.log('BDC',URLY)
try {
  const response = await axios.get(URLY)
  const {data}=response
  return {'succces':true,data}
} catch (error:any) {
  console.log(error.message)
  return {success:false,msg:error}
  
}
     }

 const fetchImage = async (params={page:1},append=false)=>{
  let res = await apiCall(params)
  //console.log(res.data)
  if(res.succces && res?.data?.hits){
    if(append){
      setImages([images,...res.data.hits])

    }else{
      setImages([...res.data.hits])

    }
  }

 }    

 useEffect(()=>{
  fetchImage()
 },[])

  return (
    <>
     <View style={[styles.container,{paddingTop}]}>
     <HeaderScreen/>
     <View style={{flex:1, justifyContent:'flex-start'}}>
     <ScrollView>
     <SearchBar/>
     <Categories/>
     <View>

     {!images? <ActivityIndicator/>: <ImagesGrid images={images}/>}
     </View>
     </ScrollView>
     </View>
     </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({ container:{
  flex:1,
  gap:15
},})