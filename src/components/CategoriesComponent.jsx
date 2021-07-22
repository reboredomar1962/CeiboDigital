import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { showCategories } from "../state/categories";

// const categories = [
//     {name: 'Negocios', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80', id: 1},
//     {name: 'Gastronomía', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80', id: 2},
//     {name: 'Fiestas', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80', id: 3},
//     {name: 'Deportes', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80', id: 4},
// ]

const CategoriesComponent = () => {
  const dispatch = useDispatch();

  const categories = useSelector((store) => {
    store.categories;
    console.log("linea 19 ->", store.categories);
  });

  React.useEffect(() => {
    dispatch(showCategories());

    console.log("ACA ESTA LAS CATEGORIES->", categories);
  }, []);

  return (
    <View style={styles.cardCont}>
      {categories &&
        categories.map((category) => (
          <Card style={styles.cardStyle} key={category.id}>
            <Card.Cover source={{ uri: category.img }} />
            <Card.Content style={{ marginTop: 5 }}>
              <Title style={styles.titleTxt}>{category.type}</Title>
            </Card.Content>
          </Card>
        ))}
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  /* cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 15
    }, */
  cardCont: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  cardStyle: {
    /* flex: 2, */
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
