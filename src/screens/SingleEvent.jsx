import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
//-------------Libraries Import--------------------------
import { Card, List } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

//-------------Redux Import------------------------------
import { showSinglePlan } from "../state/plan";
import { useDispatch, useSelector } from "react-redux";
import AccountInfo from "../components/AccountInfo";

//-------------Components Import------------------------------
import CreateComment from "../components/CreateComment";

const SingleEvent = ({ route }) => {
  const { singlePlan } = useSelector((store) => store.plan);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showSinglePlan(route.params.id));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View /* style={styles.container} */>
          <View /* style={styles.container} */>
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

          <Text style={styles.titleTxt}>{singlePlan.name}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.titleTxt}>Descripción</Text>
            <Text style={styles.paragTxt}>{singlePlan.description}</Text>

            <Text style={styles.titleTxt}>Fecha</Text>
            <Text style={styles.paragTxt}>{singlePlan.planDate}</Text>

            <Text style={styles.titleTxt}>Ubicación</Text>
            <Text style={styles.paragTxt}>{singlePlan.address}</Text>

            <Text style={styles.titleTxt}>Precio</Text>
            {singlePlan.price === 0 ? (
              <Text style={styles.paragTxt}>El evento es gratuito</Text>
            ) : (
              <Text style={styles.paragTxt}>${singlePlan.price}</Text>
            )}

            <Text style={styles.titleTxt}>Anfitrión</Text>
            <Text style={styles.paragTxt}>{singlePlan.planOwner}</Text>

            <Text style={styles.titleTxt}>Categoría</Text>
            <Text style={styles.paragTxt}>{singlePlan.category}</Text>
          </View>

          <View>
            <CreateComment singlePlan = {singlePlan} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SingleEvent;

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoContainer: {
    /* flex: 1, */
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  cardContainer: {
    /* flex: 1, */
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  cardStyle: {
    /* flex: 1, */
    margin: 15,
    width: 300,
  },
  titleTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#23036A",
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#23036A",
    marginBottom: 10,
  },
});

{
  /* <View style={styles.infoContainer}>

<List.Section>
  <List.Item
    title="First Item"
    left={() => <AntDesign name="search1" size={20} color="black" />}
  />
  <List.Item
    title="Second Item"
    left={() => <AntDesign name="search1" size={20} color="blue" />}
    titleStyle={{ color: "black", fontSize: 12 }}
    titleNumberOfLines={0}
  />
</List.Section>

</View> */
}
