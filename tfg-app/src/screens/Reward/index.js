// packages
import React, { useEffect, useContext } from "react";
import { BackHandler, View, ImageBackground, Text } from "react-native";

// constants
import Colors from "../../constants/colors";

// context and provider
import { Context as GiantContext } from "../../context/GiantContext";

// components
import RewardLogo from "../../components/RewardLogo";
import CustomButton from "../../components/CustomButton";
import HeaderRight from "../../components/HeaderRight";

// styling
import Styles from "./style";
import RewardLogoStyles from "../../components/RewardLogo/style";

/* Start of screen */
const Reward = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const { state } = useContext(GiantContext);
  const _id = navigation.getParam("_id");
  const giant = state.find((giant) => giant._id === _id);

  return (
    <View style={Styles.container}>
      <View>
        <ImageBackground
          style={Styles.imageStyle}
          source={{ uri: giant.image }}
        >
          <RewardLogo rewardLogoStyle={RewardLogoStyles.rewardBig} />
        </ImageBackground>
        <View>
          <Text style={Styles.textStyle}>
            Congrats! You found {giant.firstname}
          </Text>
          <CustomButton
            buttonColor={Colors.orange}
            buttonText={"About " + giant.firstname}
            onPress={() =>
              navigation.navigate("AboutGiant", {
                _id: giant._id,
              })
            }
          ></CustomButton>
          <CustomButton
            buttonColor={Colors.yellow}
            buttonText="Your rewards"
            onPress={() =>
              navigation.navigate("RewardList", {
                _id: giant._id,
              })
            }
          ></CustomButton>
          <CustomButton
            buttonColor={Colors.orange}
            buttonText="Back"
            onPress={() => navigation.goBack()}
          ></CustomButton>
          <CustomButton
            buttonColor={Colors.yellow}
            buttonText="Go find a new giant >"
            onPress={() =>
              navigation.navigate("AllGiants", {
                _id: giant._id,
              })
            }
          ></CustomButton>
        </View>
      </View>
    </View>
  );
};

Reward.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderRight onPress={() => navigation.navigate("Account")} />
    ),
  };
};

export default Reward;
