// packages
import React from "react";
import { View, Image, Text } from "react-native";

// styling
import Styles from "./style";

/* Start of component */
const Transport = ({ image, description }) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.imageStyle} source={image} />
      <Text style={Styles.textStyle}> {description} </Text>
    </View>
  );
};

export default Transport;
