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
    backgroundColor: Colors.green,
    flex: 1,
  },
  headlineScreen: {
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(7),
    alignSelf: "center",
    color: Colors.green,
    marginTop: "20%",
    marginBottom: "10%",
  },
  headlineInput: {
    fontFamily: Fonts.TextBold,
    color: Colors.lightGrey,
    marginLeft: 30,
    fontSize: 20,
  },
  inputStyle: {
    fontFamily: Fonts.TextRegular,
    color: Colors.grey,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    fontSize: 20,
  },
  errorMessage: {
    marginTop: 20,
    fontFamily: Fonts.TextRegular,
    alignSelf: "center",
    color: Colors.red,
  },
});

export default styles;
