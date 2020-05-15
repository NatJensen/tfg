// packages
import { StyleSheet } from "react-native";

// constants
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

/* Start of stylesheet */
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleStyle: {
    marginTop: "20%",
    textAlign: "center",
    fontFamily: Fonts.primary,
    fontSize: 72,
  },
  buttonBackgroundStyle: {
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: Colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontSize: 36,
    color: Colors.white,
    fontFamily: Fonts.primary,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Fonts.primary,
    fontSize: 24,
  },
});

export default styles;
