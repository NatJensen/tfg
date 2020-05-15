// packages
import React, { useEffect, useContext } from "react";
import { BackHandler, View, Text } from "react-native";

// constants
import Colors from "../../constants/colors";

// context and provider
import { Context as GiantContext } from "../../context/GiantContext";

// components
import Transport from "../../components/Transport";
import CustomButton from "../../components/CustomButton";
import HeaderRight from "../../components/HeaderRight";

// styling
import Styles from "./style";

/* Start of screen */
const TransportInfo = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const { state } = useContext(GiantContext);
  const _id = navigation.getParam("_id");
  const giant = state.find((giant) => giant._id === _id);
  const station = giant.station;
  const stog = giant.stog;
  const bus = giant.bus;
  const busAddress = giant.busAddress;
  const parking = giant.parking;

  return (
    <View style={Styles.container}>
      <Text style={Styles.headline}> Your options </Text>
      <Transport
        image={{
          uri:
            "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/train.png",
        }}
        description={"Take train " + stog + " to " + station}
      ></Transport>
      <Transport
        image={{
          uri: "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/bus.png",
        }}
        description={"Take bus " + bus + " to " + busAddress}
      ></Transport>
      <Transport
        image={{
          uri: "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/car.png",
        }}
        description={"Park your car at " + parking}
      ></Transport>
      <CustomButton
        buttonColor={Colors.orange}
        buttonText="Back"
        onPress={() => navigation.goBack()}
      ></CustomButton>
    </View>
  );
};

TransportInfo.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderRight onPress={() => navigation.navigate("Account")} />
    ),
  };
};

export default TransportInfo;
