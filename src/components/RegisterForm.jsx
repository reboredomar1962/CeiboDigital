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

const RegisterForm = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data));
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Nombre"
              /* inlineImageLeft='' */
              placeholderTextColor="#23036A"
              textContentType="name"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />

        <Controller
          style={{ marginBottom: 10 }}
          control={control}
          name="lastName"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Apellido"
              placeholderTextColor="#23036A"
              textContentType="familyName"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />

        <Controller
          style={{ marginBottom: 10 }}
          control={control}
          name="age"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Edad"
              placeholderTextColor="#23036A"
              keyboardType="number-pad"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />

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
      </View>
    </SafeAreaView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: 20,
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
