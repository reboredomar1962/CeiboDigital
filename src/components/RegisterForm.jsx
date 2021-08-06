import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//Redux import
import { useDispatch } from "react-redux";
import { createUser } from "../state/user";
//Form library import
import { useForm, Controller } from "react-hook-form";
import Register from "../screens/RegisterFacebook"

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
    dispatch(createUser(data))
      //.then(() => navigation.navigate("LoginScreen"))
      .then(() => navigation.goBack());
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
              placeholder="Nombre"
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
              placeholder="Apellido"
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

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#23036A",
              padding: 7,
              borderRadius: 20,
              width: 150,
              marginTop: 25,
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
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              color: "#23036A",
              textAlign: "center",
            }}
          >
            o
          </Text>
        </View>
        
        <View>
          <Register />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterForm;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  textSubtitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4B5FA",
    width: 300,
    marginBottom: 15,
  },
});
