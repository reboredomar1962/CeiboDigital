import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
//Redux import
import { useDispatch } from "react-redux";
import { createUser } from "../state/user";
//Form library import
import { useForm, Controller } from "react-hook-form";

const sports = [
  {
    label: "Football",
    value: "football",
  },
  {
    label: "Baseball",
    value: "baseball",
  },
  {
    label: "Hockey",
    value: "hockey",
  },
];

const EventForm = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data)).then(() => navigation.goBack());
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
              style={styles.textSubtitle}
              placeholder="Nombre Del Evento"
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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholderTextColor="#23036A"
              placeholder="Ubicacion"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
          defaultValue=""
        />
        {errors.lastName && <Text> is not a valid last name.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Fecha"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="planDate"
          defaultValue=""
        />
        {errors.email && <Text>is not a valid mail</Text>}

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
      </View>
    </SafeAreaView>
  );
};

export default EventForm;
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
