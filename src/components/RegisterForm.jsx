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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("onSubmit ->", data);
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
            pattern: /^[A-Za-z]+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="first Name"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Text> is not a valid name</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z]+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholderTextColor="#23036A"
              placeholder="last Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        {errors.lastName && <Text> is not a valid last name.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^\S+@\S+.\S+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="E-mail"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text>is not a valid mail</Text>}

        <Controller
          control={control}
          rules={{
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Password"
              placeholderTextColor="#23036A"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text>Must have one Uppercase, one Minuscule and 8 characters</Text>
        )}

        <Button
          title="Register"
          style={{ fontFamily: "Poppins_300Light" }}
          color="#23036A"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterForm;
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
