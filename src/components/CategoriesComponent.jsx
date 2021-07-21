import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from 'react-native-paper';

const categories = [
    {name: 'Negocios', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80', id: 1},
    {name: 'Gastronomía', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80', id: 2},
    {name: 'Fiestas', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80', id: 3},
    {name: 'Deportes', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80', id: 4},
    {name: 'Negocios', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80', id: 5},
    {name: 'Gastronomía', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80', id: 6},
    {name: 'Fiestas', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80', id: 7},
    {name: 'Deportes', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80', id: 8}
]

const CategoriesComponent = () => {
    return (
        <View style={styles.cardCont}>
                {categories.map(category => (
                <Card style={styles.cardStyle} key={category.id}>
                    <Card.Cover source={{uri: category.image }} />
                    <Card.Content style={{marginTop:5}}>
                        <Title style={styles.titleTxt}>{category.name}</Title>
                    </Card.Content>
                </Card>
                ))
                }
            </View>
    )
}

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
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'center',
        height: '100%',
        width:'100%'
    },
    cardStyle: {
        /* flex: 2, */
        width: '40%',
        margin: 10,
    },
    titleTxt: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 15,
      color: '#23036A',
    },
    paragTxt: {
        fontFamily: 'Poppins_300Light',
        fontSize: 12,
        color: '#23036A',
      },
  });