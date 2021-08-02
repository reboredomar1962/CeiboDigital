import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';


const myEvents = [
    {
        title: 'Brunch',
        paragraph: 'Tea Connection',
        image: 'https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        id: 1
    },
    {
        title: 'Juntada con amigas',
        paragraph: 'Bar Desarmadero',
        image: 'https://images.unsplash.com/photo-1591243315780-978fd00ff9db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        id: 2
    }

]

const MyEventCard = () => (
    <View style={styles.cardContainer} >
        {myEvents.map(event => (
            <Card style={styles.cardStyle} key={event.id}>
                <Card.Cover source={{uri: event.image}} />
                <Card.Content style={{marginTop:5,}}>
                    <Title style={styles.titleTxt}>{event.title}</Title>
                    <Paragraph style={styles.paragTxt} >{event.paragraph}</Paragraph>
                </Card.Content>
            </Card>
        ))
        }
    </View>
);

export default MyEventCard;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 15
    },
    cardStyle: {
        flex: 2,
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

