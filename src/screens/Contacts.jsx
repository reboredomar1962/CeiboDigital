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

        <View>
            <SearchBar
                placeholder="Buscar amigos..."
                onChangeText={()=> setSearch(search)}
                value={search}
            />
        </View>

        <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
      
        </View>
    )
}

export default Contacts;
