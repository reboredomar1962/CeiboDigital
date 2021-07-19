//--------REACT & REDUX CONFIG-------------
import React from 'react';
import { Provider } from "react-redux";
import store from './state/store';

//---------FONTS CONFIG----------------
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

//--------LIBRARIES CONFIG--------------
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//--------SCREENS IMPORT------------------
import Home from './screens/Home';
import MyAccount from './screens/MyAccount';
import Events from './screens/Events';
import Notifications from './screens/Notifications';
import CreateEvent from './screens/CreateEvent';

const Tab = createMaterialBottomTabNavigator();


const App = () => {


  let [fontsLoaded] = useFonts({
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
    
  return (
      <Provider store={store}>
    <SafeAreaProvider>
    <PaperProvider>
      <NavigationContainer>
        
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#B38BF5"
          inactiveColor="#fff"
          barStyle={{ backgroundColor: '#23036A', fontSize: 20 }}
          labelStyle={{ fontSize: 20 }}

        >
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <AntDesign name="home" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: () => (
            <AntDesign name="user" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          tabBarLabel: 'Create event',
          tabBarIcon: () => (
            <Ionicons name="add-circle" size={26} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: () => (
            <AntDesign name="calendar" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: () => (
            <AntDesign name="notification" size={20} color="white" />
          ),
        }}
      />

      </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
    </SafeAreaProvider>
    </Provider>
  )
  }

}

export default App;


{/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'El club del Plan',
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTintColor: '#23036A',
              headerTitleStyle: {
              fontFamily: 'Poppins_700Bold',
              fontSize: 20,
              letterSpacing: 2,
              textAlign: 'center',
              textTransform: 'uppercase'
            },
            }}
          />
          <Stack.Screen name="MyAccount" component={MyAccount} />
        </Stack.Navigator> */}