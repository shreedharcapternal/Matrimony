import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Card, Container, UserAge, UserImg, UserInfo, UserInfoText, UserName,UserJob,UserCity, Divider, InteractionText, Interaction } from '../styles/MatchesStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MatchesScreen = ({navigation}) => {
  const profile = [
    {
      username: "Shreedhar@183",
      profile: require("../assets/users/shreedhar.jpg"),
      age: 20,
      job_role: 'Software Developer',
      city: "pune"
    },
    {
      username: "Aditya@0096",
      profile: require("../assets/users/aditya.jpg"),
      age: 21,
      job_role: 'Software Developer',
      city: "pune",
    },
    {
      username: "Kunal@07",
      profile: require("../assets/users/sanket.jpg"),
      age: 21,
      job_role: 'Software Developer',
      city: "pune",
    },
  ]
  return (
    <Container>
    {
      profile.map((pro,key) => (
    <TouchableOpacity key={key} style={{width: '100%'}}>
      <Card>
        <UserInfo>
          <UserImg source={pro.profile} />
          <UserInfoText>
            <UserName>{pro.username}</UserName>
            <UserAge>Age : {pro.age} years</UserAge>
            <UserJob>Job profile : {pro.job_role}</UserJob>
            <UserCity>City : {pro.city}</UserCity>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('Events')}>
                    <LinearGradient colors={['#08d4c4', '#01ab94']} style={styles.signIn}>
                        <Text style={styles.textSign}>View profile</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Interaction active>
                  <Ionicons style={{marginLeft: 10,marginTop: 5}} name="heart-outline" size={30} />
                  <InteractionText active>10 Like</InteractionText>
                </Interaction>
              </View>
          </UserInfoText>
        </UserInfo>
      </Card>
      <Divider />
      </TouchableOpacity>
        ))
      }
  
    </Container>
  );
};

export default MatchesScreen




const styles = StyleSheet.create({
     title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-start',
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    signIn: {
        width: 110,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });