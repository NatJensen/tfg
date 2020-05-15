// packages
import React, { useEffect, useContext } from "react";
import { BackHandler, View } from "react-native";

// constants
import Colors from "../../constants/colors";

// context and provider
import { Context as GiantContext } from "../../context/GiantContext";

// components
import Distance from "../../components/Distance";
import CustomButton from "../../components/CustomButton";
import HeaderRight from "../../components/HeaderRight";
import Map from "../../components/Map";

// styling
import Styles from "./style";

/* Start of screen */
const GiantMap = ({ navigation }) => {
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
      <Map latitude={giant.latitude} longitude={giant.longitude} />
      <View style={Styles.bottomContainer}>
        <Distance
          giantLatitude={giant.latitude}
          giantLongitude={giant.longitude}
          firstname={giant.firstname}
        />
        <CustomButton
          buttonColor={Colors.orange}
          buttonText="How to get there?"
          onPress={() =>
            navigation.navigate("TransportInfo", {
              _id: giant._id,
            })
          }
        ></CustomButton>
        <CustomButton
          buttonColor={Colors.yellow}
          buttonText={"Go to " + giant.firstname}
          onPress={() =>
            navigation.navigate("Reward", {
              _id: giant._id,
            })
          }
        ></CustomButton>
        <CustomButton
          buttonColor={Colors.orange}
          buttonText="Back"
          onPress={() => navigation.goBack()}
        ></CustomButton>
      </View>
    </View>
  );
};

GiantMap.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderRight onPress={() => navigation.navigate("Account")} />
    ),
  };
};

export default GiantMap;
