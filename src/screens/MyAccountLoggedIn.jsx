import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  AsyncStorage,
  
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import AccountInfo from "../components/AccountInfo";
import { logoutUser } from "../state/user";

const randomUser = {
  name: "Juan",
  lastName: "Perez",
  age: 31,
  img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
  email: "juan@gmail.com",
  password: "123",
  contacts: [],
  myPlans: [],
  categories: [],
  id: 1,
};

const MyAccountLoggedIn = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  console.log("myAccount", me);

  const logoutFx = () =>{
    AsyncStorage.getItem("token")
    .then(token => {
      const newToken = JSON.parse(token)
      console.log('ESTO ES newTOKEN EN LOGOUT----->',newToken)
      dispatch(logoutUser(newToken))
      AsyncStorage.clear()
      navigation.navigate('Home')
    })
  }

  return (
    <View style={styles.container}>
      <Text>Estamos en la vista del usuario logueado</Text>
      <Button
        title='Cerrar sesión'
        onPress={()=>logoutFx()}
      ></Button>
    </View>
  );
};

export default MyAccountLoggedIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    position: "absolute",
    transform: [{ translateY: 20 }],
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  textContainer: {
    position: "absolute",
    transform: [{ translateY: 140 }],
  },
});

/*

<Svg height="100%" width="100%" style={{ position: "absolute" }}>
        <Rect x="0" y="0" width="100%" height="35%" fill="#23036A" />
      </Svg>

      <Avatar
        size={110}
        rounded
        title={me.name[0]+me.lastName[0]}
        
        avatarStyle={{ borderRadius: 10 }}
        containerStyle={styles.avatar}
        activeOpacity={0.7}>

        <Avatar.Accessory 
          name="pencil-alt"
          type="font-awesome-5"
          size={20} />
          
        </Avatar>
      


      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>
          {me.name} {me.lastName}
        </Text>
      </View>

      <View style={styles.container}>
        <AccountInfo />
      </View>

      <Button
        title='Cerrar sesión'
        onPress={()=>logoutFx()}
      ></Button>

*/
