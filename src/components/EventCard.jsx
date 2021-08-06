import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

//-------------Redux Import------------------------------
import { showPlans, showSinglePlan } from "../state/plan";
import { useSelector, useDispatch } from "react-redux";
import {
  addPlan,
  userMe,
  removePlan,
  addedPlans,
  removedPlans,
} from "../state/user";

//-------------Libraries Import--------------------------
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-elements";
import { AsyncStorage } from "react-native";
import _ from "lodash";

const EventCard = ({ navigation }) => {
  //const [state, setState] = React.useState({ open: false });
  //const [change, setChange] = React.useState(false);
  //const onStateChange = ({ open }) => setState({ open });
  //const [localPlans, setLocalPlans] = React.useState([]);
  //const [includedPlans, setIncludedPlans] = React.useState([]);

  //const { open } = state;

  const { me } = useSelector((store) => store.user);
  const { savedPlans } = useSelector((store) => store.user);

  const { plans } = useSelector((store) => store.plan);
  const { addedAllPlans } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handlePressPlus = (plan) => {
    dispatch(addPlan(plan));

    dispatch(addedPlans(plan.id));
  };

  const handlePressMinus = (plan) => {
    dispatch(removePlan(plan));
    dispatch(removedPlans(plan.id));
  };

  React.useEffect(() => {
    if (me && me.id) {
      const usersPlans = me.myPlans.map((plan) => {
        return plan.id;
      });
      console.log("este es el usersPlan", usersPlans);
      dispatch(addedPlans(usersPlans));
    }
    dispatch(showPlans());
  }, []);

  const Item = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        navigation.navigate("SingleEvent", {
          id: item.id,
          eventName: item.name,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Card style={styles.cardStyle} key={item.id}>
          <Card.Cover source={{ uri: item.img[0] }} />
          <Card.Content style={{ marginTop: 5 }}>
            <Title style={styles.titleTxt}>{item.name}</Title>
            <Paragraph style={styles.paragTxt}>
              {item.description.substr(0, 40) + "..."}
            </Paragraph>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              {item.price ? (
                <Text style={styles.priceTxt}>${item.price}</Text>
              ) : (
                <Text style={styles.priceTxt}>Gratis</Text>
              )}

              {/* <Rating
                count={5}
                startingValue={Math.round(item.recommendation)}
                imageSize={20}
                readonly
              /> */}

              {!me || !me.id
                ? null
                : [
                    !addedAllPlans.includes(item.id) ? ( //   // //includedPlans.includes(item.id) //me.myPlans.map((plan) => plan.id).includes(item.id)
                      <TouchableOpacity
                        key={item.id}
                        style={{
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                        onPress={() => handlePressPlus(item)}
                      >
                        <AntDesign
                          name="pluscircle"
                          size={24}
                          color="#23036A"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        key={item.id}
                        style={{
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                        onPress={() => handlePressMinus(item)}
                      >
                        <AntDesign
                          name="minuscircle"
                          size={24}
                          color="#23036A"
                        />
                      </TouchableOpacity>
                    ),
                  ]}
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView>
      {/* {console.log("estos son los planes cargados al savedPlans", savedPlans)}
      {console.log("este es me.myPlans", me.myPlans)} */}
      {console.log(
        "estos son los planes cargados al addedAllPlans",
        addedAllPlans
      )}
      <Text style={styles.textSubtitle}>Eventos promocionados</Text>
      {/* {console.log("estos son los LocalPlans", localPlans[0])}
      {console.log("estos son los plans", plans[0])} */}
      {/*console.log("rerenders")*/}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={plans} //data={localPlans} //
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        //extraData={change}
      />
    </SafeAreaView>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#23036A",
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  cardStyle: {
    marginTop: 20,
    marginLeft: 20,
    width: 300,
  },
  titleTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#23036A",
  },
  priceTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#23036A",
    textAlign: "center",
  },
});
