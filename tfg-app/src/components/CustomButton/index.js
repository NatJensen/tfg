// packages
import React from "react";
import { TouchableOpacity, Text } from "react-native";

// styling
import Styles from "./style";

/* Start of component */
const CustomButton = ({ buttonColor, buttonText, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...Styles.buttonStyle, ...{ backgroundColor: buttonColor } }}
      onPress={onPress}
    >
      <Text style={Styles.buttonTextStyle}> {buttonText} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
