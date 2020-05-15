// packages
import React from "react";
import { View, Image, Text } from "react-native";

// styling
import Styles from "./style";

/* Start of component */
const GiantReward = ({ image, name, date }) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.rewardImageList} source={image} />
      <Text style={Styles.rewardTextStyle}>{name}</Text>
      <Text style={Styles.rewardTextStyle}>{date}</Text>
    </View>
  );
};

export default GiantReward;
