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
  rewardBig: {
    width: wp("40%"),
    height: hp("18%"),
    marginTop: "3%",
    marginLeft: "57%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  rewardSmall: {
    width: wp("20%"),
    height: hp("10%"),
    marginTop: "3%",
    marginLeft: "73%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.green,
  },
  rewardImageList: {
    width: wp("60%"),
    height: hp("25%"),
    marginTop: 30,
    marginBottom: 5,
    resizeMode: "cover",
    borderRadius: 20,
  },
  rewardTextStyle: {
    color: Colors.black,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5),
    textAlign: "center",
  },
});

export default styles;
