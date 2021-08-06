//--------REACT CONFIG---------------------
import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

//--------COMPONENTS IMPORT----------------
import EventCard from "../components/EventCard";
import MyEventCard from "../components/MyEventCard";


const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container}>
            <EventCard navigation={navigation} />
          </View>

          <Text style={styles.textSubtitle}>Tus eventos</Text>
          <View style={{marginRight:20, marginBottom:20}}>

          <MyEventCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#23036A",
  },
});
