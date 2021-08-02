import React from "react";

//----------NAVIGATION CONFIG----------------
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//--------SCREENS IMPORT------------------
import Home from "./Home";
import Events from "./Events";
import CreateEvent from "./CreateEvent";
import SearchScreen from "./SearchScreen";
import LoginScreen from "./LoginScreen";

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
          tabBarLabel: "Inicio",
          tabBarIcon: () => <AntDesign name="home" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: () => <AntDesign name="user" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          tabBarLabel: "Crear evento",
          tabBarIcon: () => (
            <Ionicons name="add-circle" size={26} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Eventos",
          tabBarIcon: () => (
            <AntDesign name="calendar" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: () => (
            <AntDesign name="search1" size={20} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
