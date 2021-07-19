import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import axios from 'axios';
import { showPlans } from '../state/plan';
import { useSelector, useDispatch } from 'react-redux'

import { Card, Title, Paragraph } from 'react-native-paper';


const promotedEvents = [
  {
    title: 'Personal Fest',
    paragraph: 'Entradas disponibles',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
    id: 1
  },
  {
      title: 'Feria Masticar',
      paragraph: 'Conseguí tus entradas',
      image: 'https://images.unsplash.com/photo-1571946479349-e652b8a44817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
      id: 2
  },
  {
    title: 'Bar Terraza',
    paragraph: 'After Office',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80',
    id: 3
}
]



const EventCard = () => {

  const { plans } = useSelector(store => store.plan);
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
     dispatch(showPlans())
    console.log('ACA ESTA PLANS---->',plans) 
   
    
  }, [])

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={styles.cardContainer} >
        {
          promotedEvents.map(event => (
            <Card style={styles.cardStyle} key={event.id}>
                <Card.Cover source={{uri: event.image}} />
                <Card.Content style={{marginTop:5}}>
                    <Title style={styles.titleTxt}>{event.title}</Title>
                    <Paragraph style={styles.paragTxt} >{event.paragraph}</Paragraph>
                </Card.Content>
            </Card>
          ))
        }
      </View>
    </ScrollView>
  )
      };

export default EventCard;

const styles = StyleSheet.create({
  cardContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
  },
  cardStyle: {
      flex: 1,
      margin: 15,
      width: 300,
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