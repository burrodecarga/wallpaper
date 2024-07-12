import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroungImage from "@/components/BackgroungImage";
import { StatusBar } from 'expo-status-bar'
import Gradiente from "@/components/LinearGradiente";
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import TextBlock from "@/components/TextBlock";
import { WIDTH, wp } from "@/helpers/commos";

const WeilcomeScreen = () => {
	const image:ImageSourcePropType = require('@assets/images/welcome.png')
	
	return (
		<View style={styles.container}>
			<StatusBar style={"light"}/>
		
			<BackgroungImage image={image}/>	
			<Animated.View entering={FadeInDown.duration(600)} style={{position:'absolute', bottom:0}}>
			<Gradiente/>
			<View style={{position:'absolute', bottom:0}}>
			<TextBlock/>
			</View>
			</Animated.View>
		</View>
	);
};

export default WeilcomeScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,	
	}
});
