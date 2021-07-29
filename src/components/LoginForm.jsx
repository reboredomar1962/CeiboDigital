import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import Login from "../screens/LoginFacebook";
import { Divider } from 'react-native-elements';


import { loginUser } from "../state/user";

const LoginForm = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then(()=>{ console.log('HAY ALGO POR AKI??'); return navigation.navigate("Home")})
      .catch((err) => alert("Failed to save the data to the storage"))
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
            title="Iniciar sesion"
            style={{ fontFamily: "Poppins_300Light" }}
            color="#23036A"
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <Text>
        <Divider
  orientation="horizontal"
  subHeader="O"
  subHeaderStyle={{ color: 'blue' }}
  color='blue'
  width={5}
  style={{borderBottomWidth: 1, borderBottomColor: '#e1e8ee'}}

/>

        </Text>


        <View>
          <Login />
        </View>

        <View style={{flexDirection:'row'}}>

          <Text>No tenes una cuenta?</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={{ fontFamily: "Poppins_500Medium", color:"#23036A",}}>Registrate</Text>
          </TouchableOpacity>
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
    width: 150,
    borderRadius: 50,
    overflow: "hidden",
  },
});
