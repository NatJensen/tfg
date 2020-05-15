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
  mainContainer: {
    flexDirection: "column",
    flex: 1,
  },
  imageSize: {
    height: hp("30%"),
    width: wp("100%"),
  },
  audioContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
    lineHeight: 25,
  },
  boldTextStyle: {
    fontFamily: Fonts.TextBold,
  },
  textStyle: {
    textAlign: "justify",
    fontSize: RFPercentage(2.5),
    fontFamily: Fonts.TextRegular,
  },
});

export default styles;
