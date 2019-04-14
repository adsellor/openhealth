import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import History from "../screens/History";
import Hospitals from "../screens/Hospitals";
import Feedback from "../screens/Feedback";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Hospitals: Hospitals
});

HomeStack.navigationOptions = {
  tabBarLabel: "ՈՒղեգրեր",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const HistoryStack = createStackNavigator({
  History: History,
  Feedback: Feedback
});

HistoryStack.navigationOptions = {
  tabBarLabel: "Պատմություն",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  HistoryStack
});
