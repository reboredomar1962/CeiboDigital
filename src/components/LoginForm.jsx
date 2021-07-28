import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import Login from "../screens/LoginFacebook";
import SelectMultiple from "react-native-select-multiple";
import RNPickerSelect from "react-native-picker-select";

import { loginUser } from "../state/user";

const LoginForm = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then((data) => data.payload.token)
      .then((token) => {
        AsyncStorage.setItem("token", JSON.stringify(token));
        navigation.navigate('Home')
      })
      .catch((err) => {
        alert("Failed to save the data to the storage");
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Controller
          style={{ marginBottom: 10 }}
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="E-mail"
              placeholderTextColor="#23036A"
              textContentType="emailAddress"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />

        <Controller
          style={{ marginBottom: 10 }}
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Password"
              placeholderTextColor="#23036A"
              secureTextEntry={true}
              textContentType="password"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />

        <View style={styles.button}>
          <Button
            title="Enviar"
            style={{ fontFamily: "Poppins_300Light" }}
            color="#23036A"
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <View>
          <Login />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "60%",
    marginBottom: "50%",
  },
  textSubtitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4B5FA",
    width: 300,
    marginBottom: 15,
  },
  textTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    width: 300,
    color: "#23036A",
  },
  button: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    marginTop: 10,
    color: "white",
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
});
