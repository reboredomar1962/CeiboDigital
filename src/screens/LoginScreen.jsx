/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import Svg, { Rect } from "react-native-svg";
import LoginForm from "../components/LoginForm";
import Login from "./LoginFacebook";

const LoginScreen = ({ navigation }) => {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Svg height="100%" width="100%" style={{ position: "absolute" }}>
            <Rect x="0" y="0" width="100%" height="30%" fill="#23036A" />
          </Svg>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Iniciá sesión</Text>
          </View>

          <View>
            <LoginForm />
          </View>

          {/* <Login /> */}

          <Button
            title="Registrate"
            onPress={() => navigation.navigate("RegisterScreen")}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    paddingBottom: 100,
  },
  textContainer: {
    position: "absolute",
    transform: [{ translateY: 60 }],
  },
  textTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#fff",
  },
});
