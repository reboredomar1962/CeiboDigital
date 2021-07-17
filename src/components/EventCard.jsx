import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';


const EventCard = () => (
  <Card style={{width: 300, marginTop: 15}}>
    <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' }} />
    <Card.Content style={{marginTop:10}}>
      <Title style={{fontFamily: 'Poppins_500Medium', fontSize: 15, color: '#23036A'}} >Personal Fest</Title>
      <Paragraph style={{fontFamily: 'Poppins_300Light', fontSize: 10, color: '#23036A'}} >Conseguí tus entradas acá</Paragraph>
    </Card.Content>
  </Card>
);

export default EventCard;