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
const Login = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const { state, login, clearErrorMessage } = useContext(AuthContext);

  return (
    <ImageBackground
      source={{
        uri: "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/bg.png",
      }}
      style={Styles.imageBackgroundStyle}
    >
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <InputForm
        headline="Login"
        submitButtonText="Login"
        onSubmit={login}
        errorMessage={state.errorMessage}
      ></InputForm>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={Styles.textBottom}>Don't have an account? Click here</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
