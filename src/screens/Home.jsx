import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Search from '../components/Search';
import EventCard from '../components/EventCard';


const Home = ({ navigation }) => {
  return (
    
      <View style={styles.container}>
        <Text style={styles.text} >El club del plan</Text>
        <Search />
        <EventCard />
      </View>
      
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#23036A',
    paddingTop: 30,
  },

});