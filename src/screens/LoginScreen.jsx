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
import { Provider, useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import MyAccountLoggedIn from "./MyAccountLoggedIn";

const LoginScreen = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);
  return (
    <SafeAreaView>
      {me && me.id ? (
        <MyAccountLoggedIn navigation={navigation}/>
      ) : (
        <View style={styles.container}>


          <Svg height={170} width="100%">
            <Rect x="0" y="0" width="100%" height={170} fill="#23036A" />
          </Svg>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Nos alegra verte de nuevo!</Text>
          </View>

          <View style={{marginTop:25,}}>
            <LoginForm navigation={navigation} />
          </View>

        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width:'100%',
    height:'100%',
  },
  textContainer: {
    position:'absolute',
    transform:([{translateY:70}]),
  },
  textTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#fff",
  },
});
