// packages
import React, { useEffect, useContext } from "react";
import {
  BackHandler,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { NavigationEvents } from "react-navigation";

// context and provider
import { Context as AuthContext } from "../../context/AuthContext";

// components
import InputForm from "../../components/InputForm";

// styling
import Styles from "./style";

/* Start of screen */
const Signup = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <ImageBackground
      source={{
        uri: "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/bg.png",
      }}
      style={Styles.imageBackgroundStyle}
    >
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <InputForm
        headline="Signup"
        submitButtonText="Create account"
        onSubmit={signup}
        errorMessage={state.errorMessage}
      ></InputForm>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={Styles.textBottom}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Signup;
