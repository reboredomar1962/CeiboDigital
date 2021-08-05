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
  const [pago, setPago] = React.useState(false);

  const dispatch = useDispatch();

  const togglePago = () => {
    setPago(!pago);
    console.log(pago);
  };

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
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <SafeAreaView>
      <View style={{ position: "relative",
    transform: [{ translateY: -170 }],}}>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:25}}>

      <View style={styles.imgContainer}>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={16} color="#fff" />
        </TouchableOpacity>

        <Text style={{fontFamily: "Poppins_300Light", fontSize: 10, color:"#fff", textAlign:'center', width:'80%', marginTop:5}}>
          Agregar imagen
        </Text>
      </View>

      <View style={styles.imgContainer}>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={16} color="#fff" />
        </TouchableOpacity>

        <Text style={{fontFamily: "Poppins_300Light", fontSize: 10, color:"#fff", textAlign:'center', width:'80%', marginTop:5}}>
          Agregar imagen
        </Text>
      </View>

      <View style={styles.imgContainer}>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={16} color="#fff" />
        </TouchableOpacity>

        <Text style={{fontFamily: "Poppins_300Light", fontSize: 10, color:"#fff", textAlign:'center', width:'80%', marginTop:5}}>
          Agregar imagen
        </Text>
      </View>

        </View>

        <View style={{marginTop:25, marginBottom:-150}}>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholder="Nombre del evento"
              placeholderTextColor="#23036A"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
          defaultValue=""
        />

        {errors.name && <Text>Este campo no puede estar vacío</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSubtitle}
              placeholderTextColor="#23036A"
              placeholder="Ubicación"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
          defaultValue=""
        />


        {errors.lastName && <Text>Este campo no puede estar vacío</Text>}


        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', /* marginTop:5 */}}>
                <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Seleccionar fecha</Text>

                <TouchableOpacity
                onPress={showDatePicker}
                >
                  <AntDesign name="calendar" size={20} color="#23036A" />
                </TouchableOpacity>

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


        {errors.email && <Text>Este campo no puede estar vacío</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View >
              <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>
                Seleccionar categoría:
              </Text>
              <RNPickerSelect
                placeholder={placeholder}
                // onValueChange={(value) => console.log("OnValue", value)}
                onValueChange={onChange}
                onBlur={onBlur}
                items={itemsForDropdown}
              />
            </View>
          )}
          name="category"
        />

        {errors.category && <Text>This field is required</Text>}

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

        {errors.description && <Text>This field is required</Text>}

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

        {errors.capacity && <Text>This field is required</Text>}

        <Controller
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <View>
              <Text>Pago</Text>
              <Switch
                value={value}
                onValueChange={onChange}
                onChange={togglePago}
              />
            </View>
          )}
          name="free"
        />
        {pago ? (
          <Controller
            control={control}
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
          />
        ) : (
          <View></View>
        )}

        <Controller
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:5}}>
              <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Privado</Text>
              <Switch color="#985EFF" value={value} onValueChange={onChange} />
            </View>
          )}
          name="private"
        />

        <Controller
          control={control}

          render={() => (
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:15}}>
                <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Invitar</Text>
              <TouchableOpacity 
              style={{marginRight:12}}
              onPress={() => (console.log('holis'))}
              >
                <AntDesign name="pluscircleo" size={20} color="#23036A" />

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
    height: 'auto',
  },
  textSubtitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4B5FA",
    width: 300,
    marginBottom: 15,
  },
  imgContainer:{
    alignItems:'center',
    justifyContent:'center',
    width:95,
    height:120,
    borderWidth:1.5,
    borderColor:"#fff",
    borderStyle:'dashed',
    borderRadius:10,

  },
});
