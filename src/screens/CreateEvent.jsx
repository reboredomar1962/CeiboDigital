import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Rect } from "react-native-svg";
import EventForm from "../components/EventForm";
import { useSelector, useDispatch } from "react-redux";
import ConfusedSvg from "../components/ConfusedSvg";

const CreateEvent = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);
  return (
    <SafeAreaView>
      <ScrollView>

        {me && me.id ?
      
        (
          <View style={styles.container}>
        <Svg height="170" width="100%">
          <Rect x="0" y="0" width="100%" height="170" fill="#23036A" />
        </Svg>

        <View style={{ position: "relative", transform: [{ translateY: -140 }],}}>
          <EventForm navigation={navigation} />
        </View>
        </View>
        )
        :
        (
        <View style={{width:'100%', height:'100%', backgroundColor:'#fff', alignItems:'center',
                        justifyContent:'center'}}>
                            <View style={{opacity:0.5, marginBottom:20}}>
                            <ConfusedSvg />
                            </View>

                            <View style={{width:'75%'}}>
                                <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, color: "#23036A", textAlign:'center'}}>
                                    Aún no has asistido a ningún evento.
                                </Text>
                            </View>
                        </View>
        )

      }

      
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
    /* height: "100%",
    width: "100%", */
    marginBottom:-120
  },
  textTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 18,
    color: "#fff",
  },
});
