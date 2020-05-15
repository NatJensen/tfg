// packages
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10,
    marginHorizontal: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontSize: RFPercentage(4),
    color: Colors.black,
    fontFamily: Fonts.primary,
    textAlign: "center",
  },
});

export default styles;
