import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import * as FileSystem from 'expo-file-system';

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
import * as ImagePicker from 'expo-image-picker';

const EventForm = ({ navigation }) => {

// -----------------------------Image Picker Config----------------------------

  const [image, setImage] = React.useState([]);
 

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Necesitamos permiso para poder acceder a tus fotos');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      /* base64: true, */
    });

    if (!result.cancelled) {
      setImage([...image, result.uri]);
      console.log('esto es la imagen que eligio el user',result.uri)
      /* setImageBack(result.uri.replace('file://', '')) */
    }

  };
  
  // -----------------------------Image Picker Config----------------------------

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
    const obj = {
      address: data.address,
      capacity: data.capacity,
      category: data.category,
      description: data.description,
      name: data.name,
      planDate: data.planDate,
      price: data.price,
      private: data.private,
      users: data.users,
      img: image,
    }

    console.log("ESTA ES LA DATA->, ", obj);
   
    dispatch(createPlan(obj)).then(() => navigation.goBack());
  };

  //-----------------------------------Date Picker Config --------------------------

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

  /* const handleInvite = () => {
    console.log('holis');
  } */

 // ----------------------------- FIN Date Picker Config----------------------------

 const [pago, setPago] = React.useState(false);

 const togglePago = () => {
  setPago(!pago);
  console.log(pago);
};

  return (
    <SafeAreaView>
      <View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:25}}>

        {image.length === 0 ?
      <View style={styles.imgContainer}>
          <TouchableOpacity
          onPress={pickImage}
          >
            <AntDesign name="pluscircleo" size={16} color="#fff" />
          </TouchableOpacity>
  
          <Text style={{fontFamily: "Poppins_300Light", fontSize: 10, color:"#fff", textAlign:'center', width:'80%', marginTop:5}}>
            Agregar imagen
          </Text>
        </View>

        :

          (<Image source={{uri:image[0]}} style={{width:95, height:120, borderRadius:10,}}/>)
        
        }
        
        {image.length === 1 ||  image.length === 0 ?
        
        <View style={styles.imgContainer}>
          <TouchableOpacity
          onPress={pickImage}
          >
            <AntDesign name="pluscircleo" size={16} color="#fff" />
          </TouchableOpacity>
  
          <Text style={{fontFamily: "Poppins_300Light", fontSize: 10, color:"#fff", textAlign:'center', width:'80%', marginTop:5}}>
            Agregar imagen
          </Text>
        </View>

        :

          (<Image source={{uri:image[1]}} style={{width:95, height:120, borderRadius:10,}}/>)
          
        
        }

        {image.length === 2 ||  image.length === 1 ||  image.length === 0  ?
        <View style={styles.imgContainer}>
          <TouchableOpacity
          onPress={pickImage}
          >
            <AntDesign name="pluscircleo" size={16} color="#fff" />
          </TouchableOpacity>
  
          <Text style={{fontFamily: "Poppins_300Light", fontSize: 10, color:"#fff", textAlign:'center', width:'80%', marginTop:5}}>
            Agregar imagen
          </Text>
        </View>

        :

          (<Image source={{uri:image[2]}} style={{width:95, height:120, borderRadius:10,}}/>)
        
        }   
        

      {/* <View style={styles.imgContainer}>
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
      </View> */}

        </View>

        <View style={{marginTop:25}}>

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
          // rules={{
          //   required: true,
          // }}
          render={({ field: { onChange, onBlur, value } }) => (

            
              <View style={{borderBottomWidth: 1, borderBottomColor: "#D4B5FA", width: 300, paddingBottom:5, marginBottom:15, marginTop:5}}>
              <TouchableOpacity
                onPress={showDatePicker}
                >
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', }}>
                <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Seleccionar fecha</Text>
                  <AntDesign name="calendar" size={20} color="#23036A" />
                  </View>
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
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={{borderBottomWidth: 1,borderBottomColor: "#D4B5FA", width: 300, paddingBottom:5, marginBottom:17}}>
              <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>
                Seleccionar categoría:
              </Text>
              <RNPickerSelect
                placeholder={placeholder}
                // onValueChange={(value) => console.log("OnValue", value)}
                onValueChange={onChange}
                onBlur={onBlur}
                items={itemsForDropdown}
                useNativeAndroidPickerStyle={false}
                style={{color:'blue'}}
                           
              />
            </View>
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
          defaultValue="false"
          render={({ field: { onChange, value } }) => (
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth: 1, borderBottomColor: "#D4B5FA", width: 300, paddingBottom:5, marginBottom:15, marginTop:5}}>
              <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Privado</Text>
              <Switch color="#985EFF" value={value} onValueChange={onChange} />
            </View>
          )}
          name="private"
        />

        <Controller
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth: 1, borderBottomColor: "#D4B5FA", width: 300, paddingBottom:5, marginBottom:15, marginTop:5}}>
              <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Pago</Text>
              <Switch
                color="#985EFF"
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
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:5, width:300}}>
              <TextInput
                style={styles.textSubtitle}
                placeholder="Precio"
                placeholderTextColor="#23036A"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              </View>
            )}
            name="price"

          />
        ) : (
           null
        )}




        {/* <Controller
          control={control}
          render={() => (
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:15}}>
                <Text style={{fontFamily: "Poppins_300Light", fontSize: 15, color:"#23036A"}}>Invitar</Text>
              <TouchableOpacity 
              style={{marginRight:12}}
              onPress={handleInvite}
              >
                <AntDesign name="pluscircleo" size={20} color="#23036A" />
              </TouchableOpacity>
            </View>
          )}
          name="users"
        /> */}

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
    borderRadius:10,
    borderWidth:1.5,
    borderColor:"#fff",
    borderStyle:'dashed',

  },
});