// packages
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  distanceTextStyle: {
    fontSize: RFPercentage(4.4),
    fontFamily: Fonts.primary,
    marginTop: 30,
    marginRight: 5,
    marginBottom: 30,
    marginLeft: 5,
    textAlign: "center",
  },
});

export default styles;
