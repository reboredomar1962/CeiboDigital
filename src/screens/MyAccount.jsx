import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";


const MyAccount = ({ navigation }) => {

  const { me } = useSelector((store) => store.user);
  console.log('ESTO ES ME',me)

  React.useEffect(()=>{
    me && me.id ? navigation.navigate('MyAccountLoggedIn') : navigation.navigate('LoginScreen')
  })


  return (
    <>
     

     {me && me.id ? <Text>Existe ME</Text> : <Text>NO existe ME</Text>}
    </>

  );
};


export default MyAccount;

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    avatar: {
      marginTop: 25,
    },
    /* textTitle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 18,
      textAlign: 'center',
      color: '#fff',
      marginTop: 15,
    }, */
    listContainer: {
      flex:1,
      justifyContent:'flex-start',
      position:'relative',
      transform:([{translateY:200}]),
    },
    textContainer: {
      position:'absolute',
      transform:([{translateY:60}]),
    },
    textTitle: {
      fontFamily: 'Poppins_300Light',
      fontSize: 18,
      color: '#fff',
    },
    btnContainer:{
      marginBottom:20,
    },
    button: {
      fontSize: 15,
      color: 'white',
      width: 200,
      borderRadius: 50,
      overflow: 'hidden'
    },
  });

