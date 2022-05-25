import React from 'react'
import { View, Text, Button } from 'react-native'

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nofications Screen</Text>
        <Button title="Matches" onPress={() => navigation.navigate('Matches')} />
    </View>
  );
};

export default NotificationsScreen