import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

//-------------Redux Import------------------------------
import { showPlans, showSinglePlan } from "../state/plan";
import { useSelector, useDispatch } from "react-redux";
import { addPlan, userMe } from "../state/user";

//-------------Libraries Import--------------------------
import { Card, Title, Paragraph, FAB, Portal } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-elements";

const EventCard = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const { me } = useSelector((store) => store.user);

  const { plans } = useSelector((store) => store.plan);

  const dispatch = useDispatch();

  const handlePress = (plan) => {
    dispatch(addPlan(plan));
  };

  React.useEffect(() => {
    dispatch(showPlans());
  }, []);

  const Item = ({
     item,
  }) => (
    <TouchableOpacity
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
                marginTop: 5,
                alignItems: "baseline",
              }}
            >
              {item.price ? (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Foundation name="dollar" size={24} color="#23036A" />
                  <Text>{item.price}</Text>
                </View>
              ) : (
                <Text>Gratis</Text>
              )}

              <Rating
                count={5}
                startingValue={Math.round(item.recommendation)}
                imageSize={20}
                readonly
              />

              {me && me.id ?
            
              <TouchableOpacity
                style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
                onPress={() => handlePress(item)}
              >
                <AntDesign name="pluscircle" size={24} color="#23036A" />
              </TouchableOpacity>

              :

              null
            

            }

            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      item={item}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={plans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  cardStyle: {
    flex: 1,
    margin: 15,
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
});

/*  
ESTO ES UN SCROLLVIEW

return (
    
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={styles.cardContainer} >
        {
          plans.map(event => (
            <Card style={styles.cardStyle} key={event.id}>
                <Card.Cover source={{uri: event.img}} />
                <Card.Content style={{marginTop:5}}>
                    <Title style={styles.titleTxt}>{event.name}</Title>
                    <Paragraph style={styles.paragTxt} >{event.description}</Paragraph>
                </Card.Content>
            </Card>
          ))
        }
      </View>
    </ScrollView> 

  ) */
