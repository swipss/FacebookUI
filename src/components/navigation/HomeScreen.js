import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import AnotherScreen from "./AnotherScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="home" />
      <Stack.Screen component={AnotherScreen} name="AnotherScreen" />
    </Stack.Navigator>
  );
}
