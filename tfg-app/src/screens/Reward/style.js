// packages
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// constants
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    flexDirection: "column",
  },
  imageStyle: {
    height: hp("30%"),
    width: wp("100%"),
  },
  textStyle: {
    marginTop: 20,
    marginRight: 10,
    marginBottom: 20,
    marginLeft: 10,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5.2),
    textAlign: "center",
  },
});

export default styles;
