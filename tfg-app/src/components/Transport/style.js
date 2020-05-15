// packages
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  imageStyle: {
    width: 70,
    height: 70,
  },
  textStyle: {
    fontSize: RFPercentage(4),
    marginBottom: "7%",
    fontFamily: Fonts.primary,
    color: Colors.black,
    textAlign: "center",
  },
});

export default styles;
