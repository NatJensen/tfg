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
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.green,
  },
  giantTextStyle: {
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(7),
    color: Colors.white,
    marginTop: "10%",
    marginBottom: "10%",
  },
});

export default styles;
