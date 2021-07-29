import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import { logoutUser } from "../state/user";


const MyAccountLoggedIn = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  console.log("myAccount", me);

  return (
    <View style={styles.container}>
      {/* <Svg height="10%" width="100%" style={{ position: "absolute" }}>
        <Rect x="0" y="0" width="100%" height="50%" fill="#23036A" />
      </Svg> */}

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


<View style={{backgroundColor:'blue', width:150, height:50, }}>

      <TouchableOpacity
        style={{backgroundColor:'red'}}
        title='Cerrar sesión'
        onPress={()=>dispatch(logoutUser())}
      ><Text>Cerrar Sesion</Text></TouchableOpacity>
</View>
      
    </View>
  );
};


export default MyAccountLoggedIn;

const styles = StyleSheet.create({

  container: {
    /* flex: 1, */
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    position: "absolute",
    /* transform: [{ translateY: 20 }], */
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  textContainer: {
    /* position: "absolute", */
    /* transform: [{ translateY: 140 }], */
  },
});



