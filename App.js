import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigations/MainNavigation";
import { StatusBar } from "react-native";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleError = (err) => console.log(err);

  const handleLoaded = () => setLoaded(true);

  const loadAssets = async () => {
    await Font.loadAsync({
      ...Iconicons.font,
    });
  };

  return (
    <NavigationContainer>
      {loaded ? (
        <>
        <StatusBar barStyle="light-content" />
        <MainNavigation />
        </>
      ) : (
        <AppLoading
          startAsync={loadAssets}
          onFinish={handleLoaded}
          onError={handleError}
        />
      )}
    </NavigationContainer>
  );
}
