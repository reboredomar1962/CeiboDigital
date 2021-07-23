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

          <Text style={styles.textSubtitle}>Eventos promocionados</Text>

          <View style={styles.container}>
            <EventCard navigation={navigation} />
          </View>

          <Text style={styles.textSubtitle}>Tus próximos eventos</Text>

          <MyEventCard />
          
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
  textTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#23036A",
    paddingTop: 30,
  },
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#23036A",
    paddingTop: 10,
  },
});
