import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import { showPlans } from "../state/plan";
import { useSelector, useDispatch } from "react-redux";

import { Card, Title, Paragraph } from "react-native-paper";

const EventCard = () => {
  const plans = useSelector((store) => store.plan);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showPlans());
  }, []);

  const Item = ({ plan }) => (
    <Card style={styles.cardStyle} key={plan.id}>
      <Card.Cover source={{ uri: plan.img[0] }} />
      <Card.Content style={{ marginTop: 5 }}>
        <Title style={styles.titleTxt}>{plan.name}</Title>
        <Paragraph style={styles.paragTxt}>{plan.description}</Paragraph>
      </Card.Content>
    </Card>
  );
  const renderItem = ({ item }) => <Item plan={item} />;

  return (
    // <ScrollView horizontal={true}>
    <FlatList
      data={plans}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
    />
    // </ScrollView>
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
