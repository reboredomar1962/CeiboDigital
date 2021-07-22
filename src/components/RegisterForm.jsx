import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../state/user";

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data));
    console.log(data);
  };

  return (
    <SafeAreaView>
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Ingresá tu nombre"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        {/* 
      //ESTO ES PARA LAS VALIDACIONES
      rules={{
           required: {
             value: true,
             message: 'Field is required!'
           }
         }} */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Ingresá tu Email"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Ingresá tu password"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <View style={styles.button}>
          <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
        </View>
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
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "white",
    width: 300,
  },
  button: {
    color: "white",
    height: 40,
    borderRadius: 4,
  },
});
