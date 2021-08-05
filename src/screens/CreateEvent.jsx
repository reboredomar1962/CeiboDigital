import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Rect } from "react-native-svg";
import EventForm from "../components/EventForm";

const CreateEvent = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <Svg height="170" width="100%">
          <Rect x="0" y="0" width="100%" height="170" fill="#23036A" />
        </Svg>

        <View style={{ marginTop: 25 }}>
          <EventForm navigation={navigation} />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  textTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#fff",
  },
});
