import { View, Text, StatusBar } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Friends from "../Friends";
import Profile from "../Profile";
import Search from "../Search";
import { Ionicons, Entypo } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import Notifications from "../Notifications";
import Menu from "../Menu";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          title: "Home",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },

          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#1877F2" : "#272727"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Friends}
        name="Friends"
        options={{
          title: "Marketplace",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },

          tabBarIcon: ({ focused, color }) => {
            return (
              <Entypo
                name={"shop"}
                size={24}
                color={focused ? "#1877F2" : "#272727"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Search}
        name="Search"
        options={{
          title: "Groups",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },

          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "people-circle" : "people-circle-outline"}
                size={24}
                color={focused ? "#1877F2" : "#272727"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          title: "Pages",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },

          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "flag" : "flag-outline"}
                size={24}
                color={focused ? "#1877F2" : "#272727"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Notifications}
        name="Notifications"
        options={{
          title: "Notifications",
          tabBarBadge: 3,
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={
                  focused
                    ? "md-notifications-sharp"
                    : "md-notifications-outline"
                }
                size={24}
                color={focused ? "#1877F2" : "#272727"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Menu}
        name="Menu"
        options={{
          title: "Menu",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={"menu"}
                size={24}
                color={focused ? "#1877F2" : "#272727"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
