import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Svg, { Rect } from 'react-native-svg';
import RegisterForm from '../components/RegisterForm';


const RegisterScreen = ({navigation}) => {
    return (
      <SafeAreaView>

        <View style={styles.container}>


          <Svg height="170" width="100%">
              <Rect x="0" y="0" width="100%" height="170" fill="#23036A" />
          </Svg>


          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Creá tu cuenta</Text>
          </View>

          <View style={{marginTop:25,}}>
          <RegisterForm navigation={navigation}/>
          </View>
        

        </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      height:'100%',
      width:'100%',
    },
    textContainer: {
      position:'absolute',
      transform:([{translateY:70}]),
    },
    textTitle: {
      fontFamily: 'Poppins_300Light',
      fontSize: 18,
      color: '#fff',
    },
  });
