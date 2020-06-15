import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Details";
import TabNavigation from "./TabNavigation";
import { headerStyle } from "./config";

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={({ route }) => ({
          title: getHeaderTitle(route),
          ...headerStyle,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => ({
          ...headerStyle,
        })}
      />
    </Stack.Navigator>
  );
}

function getHeaderTitle(route) {
  return route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Movies";
}

export default MainNavigation;
