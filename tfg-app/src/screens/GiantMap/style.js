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
    backgroundColor: Colors.green,
  },
  bottomContainer: {
    flexDirection: "column",
  },
});

export default styles;
