// packages
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: "center",
  },
  headline: {
    fontSize: RFPercentage(6.5),
    fontFamily: Fonts.primary,
    color: Colors.black,
    margin: "5%",
    textAlign: "center",
  },
});

export default styles;
