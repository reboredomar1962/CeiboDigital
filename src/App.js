//--------REACT & REDUX CONFIG-------------
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userMe } from "./state/user";
import { AsyncStorage } from "react-native";

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
import Events from "./screens/Events";
import Notifications from "./screens/Notifications";
import CreateEvent from "./screens/CreateEvent";
import SingleEvent from "./screens/SingleEvent";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import MyAccountLoggedIn from "./screens/MyAccountLoggedIn";

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
      const newToken = JSON.parse(userToken);
      console.log("readData->", userToken);
      if (newToken !== null) {
        dispatch(userMe(newToken));
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  useEffect(() => {
    if (me && me.name) return;
    readData();
  }, [readData]);

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
