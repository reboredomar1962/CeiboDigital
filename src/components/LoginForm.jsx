import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
//Redux import
import { useDispatch } from "react-redux";
import { loginUser } from "../state/user";
//Form library import
import { useForm, Controller } from "react-hook-form";
//Screen import
import Login from "../screens/LoginFacebook";


const LoginForm = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data))

      .then(() => navigation.navigate("Home"))
      .catch((err) => alert("Failed to save the data to the storage"));

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

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#23036A",
              padding: 7,
              borderRadius: 20,
              width: 150,
              marginTop: 15,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                fontFamily: "Poppins_300Light",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Iniciar sesion
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop:4}}>
        <Text style={{ fontFamily: "Poppins_500Medium", color: "#23036A", textAlign:'center' }}>o</Text>

        </View>


        <View>
          <Login />
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontFamily: "Poppins_300Light", color: "#23036A" }}>No tenes una cuenta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={{ fontFamily: "Poppins_500Medium", color: "#23036A" }}>
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textSubtitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4B5FA",
    width: 300,
    marginBottom: 20,
  },
});
