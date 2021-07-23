/** @format */

import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
  View,
  StyleSheet,
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
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Login con Facebook" onPress={logIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});
