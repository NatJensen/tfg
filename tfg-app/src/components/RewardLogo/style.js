// packages
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
});

export default styles;
