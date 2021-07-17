import * as React from 'react';
import { View } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';


const MyEventCard = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 10}} >
        
        <Card style={{width: 150, marginTop: 15, padding: 5}}>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80' }} />
            <Card.Content style={{marginTop:10}}>
            <Title style={{fontFamily: 'Poppins_500Medium', fontSize: 15, color: '#23036A'}} >Brunch</Title>
            <Paragraph style={{fontFamily: 'Poppins_300Light', fontSize: 10, color: '#23036A'}} >Merienda en Tea Connection</Paragraph>
            </Card.Content>
        </Card>
        <Card style={{width: 150, marginTop: 15, padding: 5, marginLeft: 5}}>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80' }} />
            <Card.Content style={{marginTop:10}}>
            <Title style={{fontFamily: 'Poppins_500Medium', fontSize: 15, color: '#23036A'}} >Brunch</Title>
            <Paragraph style={{fontFamily: 'Poppins_300Light', fontSize: 10, color: '#23036A'}} >Merienda en Tea Connection</Paragraph>
            </Card.Content>
        </Card>
    </View>
);

export default MyEventCard;

