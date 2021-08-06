import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import SvgComponent from "./SvgComponent";
import HappySvg from "./HappySvg";

const NextEvents = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);
  const { addedAllPlans, plans } = useSelector((store) => store.plan);

  let auxPlans = plans.filter((plan) => addedAllPlans.includes(plan.id));

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
        {me && me.id ? (
          auxPlans.length > 0 ? (
            <ScrollView>
              <View style={styles.container}>
                {auxPlans.map((plan) => (
                  <TouchableOpacity
                    key={plan.id}
                    onPress={() =>
                      navigation.navigate("SingleEvent", {
                        id: plan.id,
                        eventName: plan.name,
                      })
                    }
                  >
                    <View key={plan.id} style={styles.cardContainer}>
                      <View style={styles.dateContainer}>
                        <View>
                          <Text style={styles.dateTxt}>
                            {plan.planDate.substring(8, 10)}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.dateTxt}>
                            {plan.planDate.substring(5, 7) === "01"
                              ? "Ene"
                              : plan.planDate.substring(5, 7) === "02"
                              ? "Feb"
                              : plan.planDate.substring(5, 7) === "03"
                              ? "Mar"
                              : plan.planDate.substring(5, 7) === "04"
                              ? "Abr"
                              : plan.planDate.substring(5, 7) === "05"
                              ? "May"
                              : plan.planDate.substring(5, 7) === "06"
                              ? "Jun"
                              : plan.planDate.substring(5, 7) === "07"
                              ? "Jul"
                              : plan.planDate.substring(5, 7) === "08"
                              ? "Aug"
                              : plan.planDate.substring(5, 7) === "09"
                              ? "Sep"
                              : plan.planDate.substring(5, 7) === "10"
                              ? "Oct"
                              : plan.planDate.substring(5, 7) === "11"
                              ? "Nov"
                              : plan.planDate.substring(5, 7) === "12"
                              ? "Dec"
                              : "?"}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.infoContainer}>
                        <View>
                          <Text style={styles.titleTxt}>
                            {plan.name.length > 27
                              ? plan.name.substring(0, 25) + "..."
                              : plan.name}
                          </Text>
                        </View>
                        <Text style={styles.paragTxt}>
                          {plan.planDate.substring(11, 16)}
                        </Text>
                        <Text style={styles.paragTxt}>
                          {plan.address.length > 27
                            ? plan.address.substring(0, 25) + "..."
                            : plan.address}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ opacity: 0.5, marginBottom: 20 }}>
                <SvgComponent />
              </View>

              <View style={{ width: "75%" }}>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 18,
                    color: "#23036A",
                    textAlign: "center",
                  }}
                >
                  Ups! Parece que todavía no hay planes para mostrar.
                </Text>
              </View>
            </View>
          )
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ opacity: 0.5, marginBottom: 20 }}>
              <HappySvg />
            </View>

            <View style={{ width: "75%" }}>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 18,
                  color: "#23036A",
                  textAlign: "center",
                }}
              >
                Tienes que iniciar sesión para acceder.
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#23036A",
                  padding: 7,
                  borderRadius: 20,
                  width: 180,
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_300Light",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Ir a iniciar sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NextEvents;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#F2E7FE",
    width: 330,
    height: 100,
    borderRadius: 10,
  },
  titleTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
    marginBottom: 5,
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 13,
    color: "#23036A",
  },
  dateTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23036A",
    width: 80,
    height: 90,
    marginLeft: 5,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 10,
  },
});
