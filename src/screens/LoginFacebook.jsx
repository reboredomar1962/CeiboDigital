/** @format */

import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  View,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import * as Facebook from "expo-facebook";
// import { logOutAsync, setUserDataAsync, getUserIDAsync } from "expo-facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const id = "588827002106865"
// const secretKey = "31b0617b3eb5843ea53856fe232c44c2"

export default function Login() {
  const [user, setUser] = useState(null);
  const id = "2075898539247474";

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: `${id}`,
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API

        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
          // `https://graph.facebook.com/me?fields=id,name,first_name,last_name,middle_name,picture,email&access_token=${token}`
       
          );
        const data = await response.json();
        console.log("hola soy data", data);

        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      // alert(`Facebook Login Error: ${message}`);
    }
  }
  function logOut() {
    Facebook.logOutAsync();
    AsyncStorage.clear();

    // const { token } = Facebook.logOutAsync({
    //   permissions: ["public_profile"],
    // });
    // var lParams = `${token}`;
    // fetch("https://graph.facebook.com/User_id/permissions", {
    //   method: "DELETE",
    //   body: lParams,
    // });
    console.log("hice logout");
    setUser(null);
    alert("Hiciste logout");
  }
  // const logOut = async () => {
  //   try {
  //     await Facebook.logOutAsync();
  //     await AsyncStorage.clear();
  //     console.log("hiciste logout")
  //     props.navigation.navigate("LoginScreen");
  //   } catch (error) {
  //     console.log("Error while loggin out");
  //   }
  // };

  return (
    <View style={styles.button}>
      {/* <Button color="#23036A" title="Login con Facebook" onPress={logIn} /> */}
      <View style={styles.container}>
        {user ? (
          <View style={styles.fotoContainer}>
            <Image
              style={styles.image}
              source={{ uri: user.picture.data.url }}
            />
            <Text style={styles.text}>{user.name}</Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
        ) : (
          <Button title="Login" onPress={logIn} />
        )}
      </View>
      <Button title="Logout" onPress={() => logOut()}></Button>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#ecf0f1",
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   button: {
//     fontSize: 15,
//     color: "white",
//     width: 200,
//     borderRadius: 50,
//     overflow: "hidden",
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
    paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    fontSize: 15,
    color: "white",
    width: 200,
    borderRadius: 50,
    overflow: "hidden",
  },
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },
});
// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, Button, Image } from "react-native";
// import * as Facebook from "expo-facebook";

// export default function App() {
//   const [user, setUser] = useState(null);

//   const signUpFacebook = async () => {
//     try {
//       await Facebook.initializeAsync("2075898539247474");
//       const { type, token } = await Facebook.logInWithReadPermissionsAsync({
//         permissions: ["public_profile", "email"],
//       });
//       if (type === "success") {
//         // Get the user's name using Facebook's Graph API
//         const response = await fetch(
//           `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
//         );
//         // console.log((await response.json()).name);
//         const data = await response.json();
//         console.log(data)
//         setUser(data);
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({ message }) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {user ? (
//         <View style={styles.fotoContainer}>
//           <Image style={styles.image} source={{ uri: user.picture.data.url }} />
//           <Text style={styles.text}>{user.name}</Text>
//           <Text style={styles.text}>{user.email}</Text>
//         </View>
//       ) : (
//         <Button title="Login" onPress={signUpFacebook} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4f4f4",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   fotoContainer: {},
//   image: { width: 200, height: 200 },
//   text: { fontSize: 18, textAlign: "center" },
// });
