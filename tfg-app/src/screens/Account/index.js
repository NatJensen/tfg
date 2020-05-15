// packages
import React, { useContext } from "react";
import { Text } from "react-native";

// constants
import Colors from "../../constants/colors";

// context and provider
import { Context as AuthContext } from "../../context/AuthContext";

// components
import CustomButton from "../../components/CustomButton";

// styling
import Styles from "./style";

/* Start of screen */
const Account = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Text style={Styles.headlineScreen}>Account</Text>
      <CustomButton
        buttonColor={Colors.yellow}
        buttonText="Back"
        onPress={() => navigation.goBack()}
      ></CustomButton>
      <CustomButton
        buttonColor={Colors.orange}
        buttonText="Logout"
        onPress={logout}
      ></CustomButton>
    </>
  );
};

export default Account;
