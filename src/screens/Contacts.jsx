import * as React from "react";
//Libraries import
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components import
import MyContacts from "../components/MyContacts";
import AllContacts from "../components/AllContacts";

const Tab = createMaterialTopTabNavigator();

const Contacts = ({ navigation }) => {
  
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
      <Tab.Screen name="Todos los usuarios" component={AllContacts} />
    </Tab.Navigator>
  );
};

export default Contacts;
  