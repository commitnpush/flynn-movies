import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({navigation}) => (
  <>
    <Text>TV</Text>
		<TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go to detail</Text>
    </TouchableOpacity>
  </>
);
