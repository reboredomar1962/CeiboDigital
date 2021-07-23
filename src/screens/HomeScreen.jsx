import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
//----------NAVIGATION CONFIG----------------
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//--------SCREENS IMPORT------------------
import Home from "./Home";
import MyAccount from "./MyAccount";
import Events from "./Events";
import CreateEvent from "./CreateEvent";
import SearchScreen from "./SearchScreen";
import Notifications from "./Notifications";
import SingleEvent from './SingleEvent';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#B38BF5"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#23036A", fontSize: 20 }}
      labelStyle={{ fontSize: 20 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: () => <AntDesign name="user" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          tabBarLabel: "Create event",
          tabBarIcon: () => (
            <Ionicons name="add-circle" size={26} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: () => (
            <AntDesign name="calendar" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <AntDesign name="search1" size={20} color="white" />
          ),
          
        }}
      />
      
    </Tab.Navigator>
    
  );
};

export default HomeScreen;
