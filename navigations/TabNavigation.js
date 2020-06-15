import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR, ACTIVE_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";


const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR,
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        switch (route.name) {
          case "Movies":
            iconName = Platform.OS === "ios" ? "ios-film" : "md-film";
            break;
          case "TV":
            iconName = Platform.OS === "ios" ? "ios-tv" : "md-tv";
            break;
          case "Search":
            iconName = Platform.OS === "ios" ? "ios-search" : "md-search";
            break;
        }
        return <TabBarIcon focused={focused} name={iconName} />;
      },
    })}
  >
    <Tab.Screen name="Movies" component={MoviesScreen} />
    <Tab.Screen name="TV" component={TVScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Tab.Navigator>
);

export default TabNavigation;
