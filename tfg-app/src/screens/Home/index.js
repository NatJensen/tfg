// packages
import React from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

// styling
import Styles from "./style";

/* Start of screen */
const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
    "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf"),
    "RobotoSlab-Regular": require("../../assets/fonts/RobotoSlab-Regular.ttf"),
    "RobotoSlab-Bold": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <ImageBackground
      source={{
        uri: "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/bg.png",
      }}
      style={Styles.imageBackgroundStyle}
    >
      <View style={Styles.container}>
        <Text style={Styles.titleStyle}>The Forgotten Giants</Text>
        <TouchableOpacity
          style={Styles.buttonBackgroundStyle}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={Styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={Styles.textStyle}>
            Don't have an account? Click here
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
