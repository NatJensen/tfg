// packages
import React, { useEffect } from "react";
import { BackHandler, ScrollView, View, Text } from "react-native";

// data
import RewardData from "../../data/RewardData";

// constants
import Colors from "../../constants/colors";

// components
import GiantReward from "../../components/GiantReward/";
import CustomButton from "../../components/CustomButton";
import HeaderRight from "../../components/HeaderRight";

// styling
import Styles from "./style";

/* Start of screen */
const RewardList = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const foundRewards = RewardData.filter((reward) => reward.found === true);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={Styles.containerScroll}
    >
      <View style={Styles.container}>
        <Text style={Styles.rewardTitle}>Your Rewards</Text>
      </View>
      <View style={Styles.containerReward}>
        {foundRewards.map((rewardFound) => (
          <GiantReward
            style={Styles.reward}
            key={rewardFound.id}
            image={rewardFound.image}
            name={rewardFound.name}
            date={rewardFound.date}
          />
        ))}
      </View>
      <CustomButton
        buttonColor={Colors.orange}
        buttonText="Back"
        onPress={() => navigation.goBack()}
      ></CustomButton>
    </ScrollView>
  );
};

RewardList.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderRight onPress={() => navigation.navigate("Account")} />
    ),
  };
};

export default RewardList;
