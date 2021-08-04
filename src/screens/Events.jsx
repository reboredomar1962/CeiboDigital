import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastEvents from '../components/PastEvents';
import NextEvents from '../components/NextEvents';


const Tab = createMaterialTopTabNavigator();

const Events = ({navigation}) => {

  const { me } = useSelector((store) => store.user);

    return (
      
          <Tab.Navigator 
              tabBarOptions={{
              labelStyle: { fontSize: 14, fontFamily: "Poppins_500Medium", color: "#23036A", },
              style: { backgroundColor: '#fff' },
              activeTintColor:"#D4B5FA",
              inactiveTintColor:'#fff',
              indicatorStyle:{backgroundColor:"#985EFF"}
              }}
              
          >
            <Tab.Screen name="Proximos" component={NextEvents} navigation={navigation}/>
            <Tab.Screen name="Anteriores" component={PastEvents} />
          </Tab.Navigator>
        
    )
}

export default Events;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      width:'100%',
      height:'100%',
    },
  });

  