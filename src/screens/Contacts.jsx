import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TouchableOpacity,
    Platform,
    Image,
    Alert
  } from "react-native";
//Libraries import
import { ListItem, Avatar, SearchBar } from 'react-native-elements'

const Contacts = () => {
    const [search, setSearch] = React.useState('')
    const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
      ]
    return (
        <View>

        <Text>Contactos</Text>
      
        </View>
    )
}

export default Contacts;
