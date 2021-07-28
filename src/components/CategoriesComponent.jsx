import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

//----------------LIBRARIES CONFIG-------------------------------
import { Card, Title } from "react-native-paper";

//-----------------REDUX CONFIG-----------------------------------
import { showCategories } from "../state/categories";
import { searchPlans } from "../state/plan";
import { useSelector, useDispatch } from "react-redux";


const CategoriesComponent = () => {
  const {categories} = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showCategories());
  }, []);

  const onPressAction = (category) => {
    dispatch(searchPlans(category));
  };

  /* console.log("ESTO ES CATEGORIES", categories); */

  return (
    <View style={styles.cardCont}>
      {categories.map((category) => (
        <TouchableOpacity
          style={styles.cardStyle}
          key={category.id}
          onPress={() => {
            onPressAction(category);
          }}
        >
          <Card>
            <Card.Cover source={{ uri: category.img }} />
            <Card.Content style={{ marginTop: 5 }}>
              <Title style={styles.titleTxt}>{category.type}</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({

  cardCont: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  cardStyle: {
    width: "40%",
    margin: 10,
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
