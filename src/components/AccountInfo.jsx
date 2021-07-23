import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList } from "react-native";

const randomUser = {
    name: "Juan",
    lastName: "Perez",
    age: 31,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300',
    email: "juan@gmail.com",
    password: "123",
    contacts: [],
    myPlans: [],
    categories: [],
    id: 1
}

const Item = ({ age, email, myPlans, categories }) => (

    <View style={styles.item}>

    <Text style={styles.title}>{age}</Text>
    <Text style={styles.title}>{email}</Text>

    {myPlans.length === 0 ?
    <Text style={styles.title}>{myPlans}</Text> :
    <Text style={styles.title}>No hay planes para mostrar</Text>
    }

    {categories.length === 0 ?
    <Text style={styles.title}>{categories}</Text> :
    <Text style={styles.title}>No hay categorias favoritas</Text>
    }

    </View>
);

const renderItem = ({ item }) => (
    <Item
      age={item.age}
      email={item.email}
      myPlans={item.myPlans}
      categories={item.categories}
    />
  );

const AccountInfo = () => {
    return (
        <SafeAreaView>
        <FlatList
            data={randomUser}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        </SafeAreaView>
    )
}

export default AccountInfo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    avatar: {
      position:'absolute',
      transform:([{translateY:20}]),
    },
    textContainer: {
      position:'absolute',
      transform:([{translateY:130}]),
    },
    item: {
        backgroundColor: 'blue',
      },
    title: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
        textAlign: 'center',
        color: '#fff',
      },
  });
