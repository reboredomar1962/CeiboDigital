/** @format */

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { setState } from "react";

// import { StyleSheet, Text, View } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { SearchBar } from 'react-native-elements';

// export default function App() {

//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <Text>terminando el dia en main </Text>
//         <StatusBar style="auto" />
//         <Search/>
//       </View>
//     </SafeAreaProvider>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import { Header } from "react-native-elements";
// import Search from "./components/Search";
// import SideBarMenu from "./components/SideBarMenu";
// import { NavigationContainer } from "@react-navigation/native";
// import { NativeBaseProvider } from "native-base";
// import  MyDrawer  from "./components/SideBarMenu";

// export default class App extends React.Component {
//   render() {
//     return (
//       <SafeAreaProvider>
//         <SideBarMenu />
//         <Header
//           placement="left"
//           leftComponent={{ icon: "menu", color: "#fff" }}
//           centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
//           rightComponent={{ icon: "home", color: "#fff" }}
//         />
//         <Search />
//         <NavigationContainer>
//           <NativeBaseProvider>
//             <MyDrawer />
//           </NativeBaseProvider>
//         </NavigationContainer>
//       </SafeAreaProvider>
//     );
//   }
// }

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CardComponent from "./src/components/SingleEvent";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
import HeaderApp from "./src/components/HeaderApp";
import MyDrawer from "./src/components/SideBarMenu";
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HeaderApp />

        <MyDrawer />

        {/* <Center flex={1}></Center>
         <CardComponent/> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
