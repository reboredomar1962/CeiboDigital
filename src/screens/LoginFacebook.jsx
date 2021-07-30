/** @format */

import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import * as Facebook from "expo-facebook";
// const id = "588827002106865"
// const secretKey = "31b0617b3eb5843ea53856fe232c44c2"

export default function Login() {
  const id = "2075898539247474";

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: `${id}`,
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        const data = await response.json();
        console.log(data)
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (

    <View>
          <TouchableOpacity
          style={{ backgroundColor:"#23036A", padding:7, borderRadius:20, width:250, marginTop:5}}
          onPress={logIn}
          >
            <Text style={{ fontFamily: "Poppins_300Light", color:'#fff', textAlign:'center' }}>Iniciar sesion con Facebook</Text>
          </TouchableOpacity>
    </View>
  );
}


