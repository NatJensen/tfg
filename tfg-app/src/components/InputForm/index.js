// packages
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

// constants
import Colors from "../../constants/colors";

// components
import CustomButton from "../CustomButton";

// styling
import Styles from "./style";

/* Start of component */
const InputForm = ({ headline, submitButtonText, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View styles={Styles.container}>
        <Text style={Styles.headlineScreen}>{headline}</Text>
      </View>
      <View>
        <Text style={Styles.headlineInput}>Email</Text>
        <TextInput
          style={Styles.inputStyle}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          blurOnSubmit={false}
        ></TextInput>
        <Text style={Styles.headlineInput}>Password</Text>
        <TextInput
          style={Styles.inputStyle}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        ></TextInput>
        <CustomButton
          buttonColor={Colors.orange}
          buttonText={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        ></CustomButton>
        {errorMessage ? (
          <Text style={Styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </View>
    </>
  );
};

export default InputForm;
