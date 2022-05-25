/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MatchesScreen from './screens/MatchesScreen';
import EventsScreen from './screens/EventsScreen';
import Maintab from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import NotificationsScreen from './screens/NotificationsScreen';
import RootStackScreen from './screens/RootStackScreen';
import SignUpScreen from './screens/SignUpScreen'





const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


const App = () => {
    return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Home">
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#663399'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} name="Matches" component={MatchesScreen} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#663399'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} name="Events" component={EventsScreen} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#663399'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} name="Notications" component={NotificationsScreen} />
         <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#663399'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} name="SignUp" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}




export default App;
