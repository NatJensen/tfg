// packages
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  headlineScreen: {
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(7),
    alignSelf: "center",
    color: Colors.green,
    marginTop: "10%",
    marginBottom: "10%",
  },
});

export default styles;
