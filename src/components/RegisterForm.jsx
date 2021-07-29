import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

import { createUser } from "../state/user";

const RegisterForm = ({ navigation }) => {
  /* const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" }) */

  const { control, handleSubmit, formState: { errors } } = useForm();

  

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data));
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView>
      <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{color:'black', borderBottomWidth:5, width:200,}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={{color:'black', borderBottomWidth:5, width:200,}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
    </SafeAreaView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
    marginTop: 30,
    color: "white",
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
});
