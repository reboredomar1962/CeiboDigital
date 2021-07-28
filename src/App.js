//--------REACT & REDUX CONFIG-------------
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { userMe } from "./state/user";
import { AsyncStorage } from "react-native";
import axios from "axios";

//---------FONTS CONFIG----------------
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

//--------LIBRARIES CONFIG--------------------------------------
//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
//react paper
import { Provider as PaperProvider } from "react-native-paper";

//--------SCREENS IMPORT------------------
import Home from "./screens/Home";
import MyAccount from "./screens/MyAccount";
import Events from "./screens/Events";
import Notifications from "./screens/Notifications";
import CreateEvent from "./screens/CreateEvent";
import SingleEvent from "./screens/SingleEvent";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import MyAccountLoggedIn from "./screens/MyAccountLoggedIn";
import FilterDrawer from "./components/FilterDrawer";

//------- https://reactnavigation.org/docs/nesting-navigators#best-practices-when-nesting ---------
const commonScreens = {
  Home: Home,
};

/* const authScreens = {
  SignIn: SignInScreen,
  Register: RegisterScreen,
}; */

const userScreens = {
  Home: HomeScreen,
  MyAccount: MyAccount,
  CreateEvent: CreateEvent,
};
//----------------------------------------------------------------------------------------------

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const dispatch = useDispatch();
  const { me } = useSelector((store) => store.user);

  const readData = async () => {
    try {
      const userToken = await AsyncStorage.getItem("token");
      const nerToken = JSON.parse(userToken);
      console.log("readData->", userToken);
      if (nerToken !== null) {
        dispatch(userMe(nerToken));
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    if (me && me.name) return;
    readData();
    //AsyncStorage.clear();
  }, [readData]);

  console.log(me);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (

      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  title: "El club del Plan",
                  headerStyle: {
                    backgroundColor: "#fff",
                  },
                  headerTintColor: "#23036A",
                  headerTitleStyle: {
                    fontFamily: "Poppins_700Bold",
                    fontSize: 20,
                    letterSpacing: 2,
                    textAlign: "center",
                    textTransform: "uppercase",
                  },
                }}
              />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Events" component={Events} />
              <Stack.Screen name="MyAccount" component={MyAccount} />
              <Stack.Screen name="Notifications" component={Notifications} />
              <Stack.Screen name="CreateEvent" component={CreateEvent} />
              <Stack.Screen
                name="SingleEvent"
                component={SingleEvent}
                options={({ route }) => ({
                  title: route.params.eventName,
                  headerTintColor: "#23036A",
                  headerTitleStyle: {
                    fontFamily: "Poppins_500Medium",
                    fontSize: 18,
                  },
                })}
              />
              <Stack.Screen name="SearchScreen" component={SearchScreen} />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                  title: "Registro",
                  headerTintColor: "#23036A",
                  headerTitleStyle: {
                    fontFamily: "Poppins_500Medium",
                    fontSize: 18,
                  },
                }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  title: "Iniciar Sesión",
                  headerTintColor: "#23036A",
                  headerTitleStyle: {
                    fontFamily: "Poppins_500Medium",
                    fontSize: 18,
                  },
                }}
              />
              <Stack.Screen
                name="MyAccountLoggedIn"
                component={MyAccountLoggedIn}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>

    );
  }
};

export default App;
