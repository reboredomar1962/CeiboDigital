import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
} from "react-native";
//Libraries import
import { ListItem, Avatar, SearchBar } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components import
import MyContacts from "../components/MyContacts";
import AllContacts from "../components/AllContacts";

const Tab = createMaterialTopTabNavigator();

const Contacts = ({ navigation }) => {
  const [search, setSearch] = React.useState("");
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
  ];
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontFamily: "Poppins_500Medium",
          color: "#23036A",
        },
        style: { backgroundColor: "#fff" },
        activeTintColor: "#D4B5FA",
        inactiveTintColor: "#fff",
        indicatorStyle: { backgroundColor: "#985EFF" },
      }}
    >
      <Tab.Screen
        name="Mis contactos"
        component={MyContacts}
        navigation={navigation}
      />
      <Tab.Screen name="Todos los contactos" component={AllContacts} />
    </Tab.Navigator>
  );
};

export default Contacts;
  