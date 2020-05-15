// packages
import React, { useEffect, useContext } from "react";
import {
  BackHandler,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";

// context and provider
import { Context as GiantContext } from "../../context/GiantContext";

// components
import Giant from "../../components/Giant";
import HeaderRight from "../../components/HeaderRight";

// styling
import Styles from "./style";

/* Start of screen */
const AllGiants = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const { state, getGiants } = useContext(GiantContext);

  return (
    <View style={Styles.container}>
      <Text style={Styles.giantTextStyle}>GO FIND A GIANT</Text>
      <NavigationEvents onWillFocus={getGiants} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("GiantMap", { _id: item._id })}
            >
              <Giant
                name={item.name}
                image={item.image}
                location={item.location}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

AllGiants.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderRight onPress={() => navigation.navigate("Account")} />
    ),
  };
};

export default AllGiants;
