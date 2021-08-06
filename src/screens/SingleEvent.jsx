import * as React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
//-------------Libraries Import--------------------------
import { Card } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { showComments } from "../state/comments";
import dateFormat from "../utils/utils";

//-------------Redux Import------------------------------
import { showSinglePlan } from "../state/plan";
import { useDispatch, useSelector } from "react-redux";

//-------------Components Import------------------------------
import CreateComment from "../components/CreateComment";
import ShowComments from "../components/ShowComments";

const SingleEvent = ({ route }) => {
  const { singlePlan } = useSelector((store) => store.plan);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showSinglePlan(route.params.id));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.cardContainer}>
                {Object.keys(singlePlan).length !== 0 &&
                  singlePlan.img.map((image) => (
                    <Card style={styles.cardStyle} key={image}>
                      <Card.Cover source={{ uri: image }} />
                    </Card>
                  ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.titleTxt}>{singlePlan.name}</Text>

            <View style={styles.itemsStyle}>
              <AntDesign name="infocirlceo" size={24} color="#985EFF" />
              <Text style={styles.paragTxt}>{singlePlan.description}</Text>
            </View>

            <View style={styles.itemsStyle}>
              <AntDesign name="calendar" size={24} color="#985EFF" />
              <Text style={styles.paragTxt}>
                {dateFormat(new Date(singlePlan.planDate))}
              </Text>
            </View>

            <View style={styles.itemsStyle}>
              <Ionicons name="location-outline" size={28} color="#985EFF" />
              <Text style={styles.paragTxt}>{singlePlan.address}</Text>
            </View>

            <View style={styles.itemsStyle}>
              <Feather name="dollar-sign" size={24} color="#985EFF" />
              {singlePlan.price === 0 ? (
                <Text style={styles.paragTxt}>El evento es gratuito</Text>
              ) : (
                <Text style={styles.paragTxt}>${singlePlan.price}</Text>
              )}
            </View>

            <View style={styles.itemsStyle}>
              <AntDesign name="user" size={24} color="#985EFF" />
              <Text style={styles.paragTxt}>{singlePlan.planOwner}</Text>
            </View>

            <View style={styles.itemsStyle}>
              <AntDesign name="profile" size={24} color="#985EFF" />
              <Text style={styles.paragTxt}>{singlePlan.category}</Text>
            </View>

            <View style={styles.itemsStyle}>
              <AntDesign name="message1" size={24} color="#985EFF" />
              {console.log("este es el singlePlan ID", singlePlan.id)}
              <ShowComments />
            </View>

            <View style={styles.itemsStyle}>
              <CreateComment />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SingleEvent;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 20,
  },
  cardStyle: {
    marginTop: 20,
    marginLeft: 20,
    width: 300,
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
    marginBottom: 15,
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 13,
    color: "#23036A",
    marginLeft: 15,
  },
  itemsStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
    marginBottom: 10,
  },
});
