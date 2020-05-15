// packages
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// styling
import Styles from "./style";

/* Start of component */
const HeaderRight = ({ onPress }) => {
  return (
    <TouchableOpacity style={Styles.accountStyle} onPress={onPress}>
      <MaterialCommunityIcons name="account-details" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default HeaderRight;
