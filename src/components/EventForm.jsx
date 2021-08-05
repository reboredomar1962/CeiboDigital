import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
//Redux import
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../state/user";
import { showCategories, addCategory } from "../state/categories";
//Form library import
import { useForm, Controller } from "react-hook-form";
import { Switch } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { createPlan } from "../state/plan";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dateFormat from "../utils/utils";

const EventForm = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { categories } = useSelector((store) => store.categories);
  const [date, setDate] = React.useState(new Date());

  const dispatch = useDispatch();

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(showCategories());
    } else return (mounted = false);
  }, []);

  const itemsForDropdown = [];
  categories.forEach((item) => {
    if (item.type !== undefined) {
      itemsForDropdown.push({ label: item.type, value: item.type });
    }
  });

  const placeholder = {
    label: "Seleccionar...",
    value: null,
  };

  const onSubmit = (data) => {
    console.log("ESTA ES LA DATA->, ", data);
    dispatch(createPlan(data)).then(() => navigation.goBack());
  };

  //-----------------------------------

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
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
          // rules={{
          //   required: true,
          // }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Button title="Show Date Picker" onPress={showDatePicker} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(data) => {
                  handleConfirm(data);
                  onChange(data);
                }}
                // onChange={onChange}
                onCancel={hideDatePicker}
              />
            </View>
          )}
          name="planDate"
          defaultValue=""
        />

        {errors.email && <Text>is not a valid mail</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <RNPickerSelect
              placeholder={placeholder}
              // onValueChange={(value) => console.log("OnValue", value)}
              onValueChange={onChange}
              onBlur={onBlur}
              items={itemsForDropdown}
            />
          )}
          name="category"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Descripción del evento"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="description"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Capacidad"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="capacity"
          defaultValue=""
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Precio"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="price"
          defaultValue=""
        />
        <Controller
          control={control}
          defaultValue="false"
          render={({ field: { onChange, value } }) => (
            <View>
              <Text>Privado</Text>
              <Switch value={value} onValueChange={onChange} />
            </View>
          )}
          name="private"
        />

        <Controller
          control={control}
          render={() => (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Contacts")}>
                <Text>Invitar</Text>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
          name="users"
        />

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
              Crear
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
