import * as React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import SearchScreen from '../screens/SearchScreen';

const Drawer = createDrawerNavigator();

const FilterDrawer = () => {
    
    return (
        <Drawer.Navigator drawerPosition='right' drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="SearchScreen" component={SearchScreen} />
        </Drawer.Navigator>
      );

};


export default FilterDrawer;

