import React from 'react'
import { View, Text, Button } from 'react-native'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
        <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

export default ProfileScreen