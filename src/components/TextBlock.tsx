import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp, wp } from "@/helpers/commos";
import { theme } from "@/constants/theme";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Link, useNavigation, useRouter } from "expo-router";

const TextBlock = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Animated.Text
        entering={FadeInDown.delay(500).springify()}
        style={styles.title}
      >
        Pixel
      </Animated.Text>
      <Animated.Text
        entering={FadeInDown.delay(600).springify()}
        style={styles.pushline}
      >
        Every Pixel Tell a History
      </Animated.Text>
      <Animated.View entering={FadeInDown.delay(700).springify()}>
        <TouchableOpacity style={styles.startButton} onPress={()=>router.push('home')}>
          <Text style={styles.startText}>Start Explore</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default TextBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
    width: wp(100),
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: "bold",
  },
  pushline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: "600",
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.md,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: "600",
    letterSpacing: 1,
  },
});
