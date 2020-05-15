// packages
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// screens
import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Account from "../screens/Account";
import AllGiants from "../screens/AllGiants";
import GiantMap from "../screens/GiantMap";
import TransportInfo from "../screens/TransportInfo";
import Reward from "../screens/Reward";
import AboutGiant from "../screens/AboutGiant";
import RewardList from "../screens/RewardList";

// constants
import Colors from "../constants/colors";

/* Start of navigator */
const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator(
    {
      Home: Home,
      Signup: Signup,
      Login: Login,
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    }
  ),
  appFlow: createStackNavigator(
    {
      AllGiants: AllGiants,
      GiantMap: GiantMap,
      TransportInfo: TransportInfo,
      Reward: Reward,
      AboutGiant: AboutGiant,
      RewardList: RewardList,
      Account: Account,
    },
    {
      defaultNavigationOptions: {
        title: "The Forgotten Giants",
        headerStyle: {
          backgroundColor: Colors.green,
        },
        headerTintColor: Colors.black,
        headerLeft: () => null,
        gestureEnabled: false,
      },
    }
  ),
});

export default createAppContainer(switchNavigator);
