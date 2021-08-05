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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../state/user";

export default function Register() {
  const [user, setUser] = useState(null);
  const id = "2075898539247474";
  const dispatch = useDispatch();

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
          `https://graph.facebook.com/me?fields=id,name,first_name,last_name,middle_name,picture,email&access_token=${token}`
        );
        const data = await response.json();
        console.log("dataface", data)
        const usuario = {
          name: data.first_name,
          lastName: data.last_name,
          img: data.picture.data.url,
          url:data.picture.data.url,
          email: data.email,
          password: data.id,

        };
        await setUser(usuario);
        // console.log("hola soy user in", user);
        
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      // alert(`Facebook Login Error: ${message}`);
    }
    // dispatch(createUser(data));
    
  }   
  // console.log("llego el data user", user);
   dispatch(createUser(user)) 
   

  return (
    // <View style={styles.button}>
    
    //   <Button title="Registrate con Facebook" onPress={logIn} />

    //   {/* <Button title="Logo" onPress={() => logOut()}></Button> */}
    // </View>
    <View style={{ alignItems: "center" }}>
    <TouchableOpacity
      style={{
        backgroundColor: "#23036A",
        padding: 7,
        borderRadius: 20,
        width: 150,
        marginTop: 25,
      }}
      onPress={logIn}
    >
      <Text
        style={{
          fontFamily: "Poppins_300Light",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Registrate con Facebook
      </Text>
    </TouchableOpacity>
  </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4f4f4",
//     alignItems: "center",
//     justifyContent: "center",
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
//   fotoContainer: {},
//   image: { width: 200, height: 200 },
//   text: { fontSize: 18, textAlign: "center" },
// });
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    fontFamily: "Poppins_500Medium", 
    color: "#23036A"
  },
  textSubtitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4B5FA",
    width: 300,
    marginBottom: 20,
  },
  button: {
        fontSize: 15,
        color: "white",
        width: 200,
        borderRadius: 50,
        overflow: "hidden",
      },
});
