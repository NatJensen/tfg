// packages
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

// constants
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  direction: {
    flexDirection: "row",
  },
  locationEmoji: {
    width: 40,
    height: 33,
    resizeMode: "contain",
  },
  locationText: {
    color: Colors.white,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5),
  },
  giantImageStyle: {
    marginTop: 10,
    marginBottom: 40,
    height: hp("35%"),
    width: wp("90%"),
    resizeMode: "cover",
  },
  borderRadiusStyle: {
    borderRadius: 20,
  },
  imageTextPlacement: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    alignItems: "center",
    backgroundColor: Colors.whiteTransparency,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageTextStyle: {
    margin: 10,
    fontSize: RFPercentage(5),
    color: Colors.black,
    fontFamily: Fonts.primary,
  },
});

export default styles;
